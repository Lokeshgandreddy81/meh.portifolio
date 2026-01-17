import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const ProjectAccessModal = ({ isOpen, onClose, projectName = 'Unknown Project' }) => {
    const [stage, setStage] = useState('loading');
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentLine, setCurrentLine] = useState({ text: '', status: 'loading' });
    const [accessToken, setAccessToken] = useState('');
    const [stats, setStats] = useState({
        totalAttempts: 0,
        todayAttempts: 0,
        yourPosition: 0
    });

    const generateToken = () => {
        const randomStr = Math.random().toString(36).substr(2, 4).toUpperCase();
        return `CT-${randomStr}-${new Date().getFullYear()}`;
    };

    // Initialize stats
    useEffect(() => {
        if (!isOpen) return;

        const token = generateToken();
        setAccessToken(token);
        setStage('loading');
        setTerminalLines([]);
        setCurrentLine({ text: '', status: 'loading' });

        const storedData = localStorage.getItem('projectAccessStats');
        let data = storedData ? JSON.parse(storedData) : {
            totalAttempts: 0,
            todayAttempts: 0,
            lastDate: new Date().toDateString(),
            attempts: []
        };

        if (data.lastDate !== new Date().toDateString()) {
            data.todayAttempts = 0;
            data.lastDate = new Date().toDateString();
        }

        const newAttempt = {
            id: token,
            timestamp: new Date().toISOString(),
            project: projectName,
            userAgent: navigator.userAgent
        };

        data.totalAttempts += 1;
        data.todayAttempts += 1;
        data.attempts.push(newAttempt);

        if (data.attempts.length > 100) {
            data.attempts = data.attempts.slice(-100);
        }

        localStorage.setItem('projectAccessStats', JSON.stringify(data));

        setStats({
            totalAttempts: data.totalAttempts,
            todayAttempts: data.todayAttempts,
            yourPosition: data.totalAttempts
        });
    }, [isOpen, projectName]);

    // Streaming terminal animation
    useEffect(() => {
        if (!isOpen || stage !== 'loading') return;

        const sequence = [
            {
                text: `Initializing secure connection to ${projectName}...`,
                status: 'loading',
                duration: 2000
            },
            {
                text: 'Authenticating session credentials...',
                status: 'success',
                duration: 2200
            },
            {
                text: 'Verifying access permissions...',
                status: 'success',
                duration: 2100
            },
            {
                text: 'Scanning authorization levels...',
                status: 'loading',
                duration: 2300
            },
            {
                text: 'Checking project visibility status...',
                status: 'loading',
                duration: 2000
            },
            {
                text: 'ACCESS DENIED - Project is in private development mode',
                status: 'error',
                duration: 2500
            }
        ];

        let timeoutIds = [];

        const processLine = (index) => {
            if (index >= sequence.length) {
                const finalTimeout = setTimeout(() => {
                    setStage('denied');
                }, 1500);
                timeoutIds.push(finalTimeout);
                return;
            }

            const { text, status, duration } = sequence[index];
            setCurrentLine({ text: '', status });

            const chars = text.split('');
            const charDelay = duration / chars.length;

            chars.forEach((char, charIndex) => {
                const charTimeout = setTimeout(() => {
                    setCurrentLine(prev => ({
                        ...prev,
                        text: prev.text + char
                    }));

                    if (charIndex === chars.length - 1) {
                        const completeTimeout = setTimeout(() => {
                            setTerminalLines(prev => [...prev, { text, status }]);
                            setCurrentLine({ text: '', status: 'loading' });
                            processLine(index + 1);
                        }, 300);
                        timeoutIds.push(completeTimeout);
                    }
                }, charIndex * charDelay);
                timeoutIds.push(charTimeout);
            });
        };

        processLine(0);

        return () => {
            timeoutIds.forEach(id => clearTimeout(id));
        };
    }, [isOpen, stage, projectName]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const StatusIcon = ({ status }) => {
        if (status === 'success') return <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />;
        if (status === 'error') return <AlertCircle size={16} className="text-red-500 flex-shrink-0" />;
        return <Loader2 size={16} className="text-blue-500 animate-spin flex-shrink-0" />;
    };

    return (
        <>
            {/* Premium backdrop - theme aware */}
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100] transition-all duration-700"
                style={{ animation: 'backdropFade 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                onClick={onClose}
            />

            {/* Modal - fully theme aware */}
            <div
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                style={{ animation: 'modalEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
                <div
                    className="bg-background border border-border w-full max-w-5xl max-h-[90vh] overflow-hidden pointer-events-auto relative modal-shadow"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-8 md:right-8 z-10 w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-all duration-300 hover:rotate-90 hover:scale-110"
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>

                    {/* Content */}
                    <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                        {stage === 'loading' ? (
                            /* ===== LOADING STAGE ===== */
                            <div className="px-8 md:px-16 py-12 md:py-20">
                                {/* Header */}
                                <div className="mb-12 md:mb-16">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted">Processing Request</span>
                                    </div>
                                    <h2
                                        className="text-4xl md:text-6xl font-light leading-[1.1] text-foreground mb-4"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        Accessing Project
                                    </h2>
                                    <p className="text-xl text-muted">
                                        <span className="text-foreground italic">{projectName}</span>
                                    </p>
                                </div>

                                {/* AI-Style Terminal - theme aware */}
                                <div className="bg-accent border border-border p-6 md:p-8 terminal-glow">
                                    <div className="space-y-4 font-mono text-sm min-h-[320px]">
                                        {terminalLines.map((line, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 opacity-0"
                                                style={{
                                                    animation: 'lineSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                                                }}
                                            >
                                                <StatusIcon status={line.status} />
                                                <span className={
                                                    line.status === 'error'
                                                        ? 'text-red-500 font-medium'
                                                        : line.status === 'success'
                                                            ? 'text-green-500/90'
                                                            : 'text-muted'
                                                }>
                                                    {line.text}
                                                </span>
                                            </div>
                                        ))}

                                        {currentLine.text && (
                                            <div className="flex items-start gap-3">
                                                <StatusIcon status={currentLine.status} />
                                                <span className={
                                                    currentLine.status === 'error'
                                                        ? 'text-red-500 font-medium'
                                                        : currentLine.status === 'success'
                                                            ? 'text-green-500/90'
                                                            : 'text-muted'
                                                }>
                                                    {currentLine.text}
                                                    <span className="inline-block w-1.5 h-4 bg-blue-500 ml-1 animate-pulse" />
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Progress indicator */}
                                    <div className="mt-8 flex items-center gap-3 text-xs text-muted">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </div>
                                        <span className="uppercase tracking-wider">Analyzing</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* ===== DENIED STAGE ===== */
                            <div className="px-8 md:px-16 py-12 md:py-20">
                                {/* Header */}
                                <div className="mb-12 md:mb-16">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertCircle size={20} className="text-red-500" />
                                        <span className="text-xs uppercase tracking-[0.2em] text-muted">Access Restricted</span>
                                    </div>
                                    <h1
                                        className="text-5xl md:text-7xl font-light leading-[1.1] text-foreground mb-6"
                                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                    >
                                        Private Development<br />Zone
                                    </h1>
                                    <p className="text-xl md:text-2xl text-muted italic max-w-2xl leading-relaxed">
                                        "Curiosity is the engine of achievement"
                                    </p>
                                    <p className="text-muted mt-2">— Richard Feynman</p>
                                </div>

                                {/* Message */}
                                <div className="mb-12 md:mb-16 max-w-3xl">
                                    <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
                                        You've reached my private development zone. While I'd love to show you everything,
                                        some projects remain confidential as they're actively evolving.
                                    </p>

                                    {/* Status items */}
                                    <div className="space-y-5 mb-12 border-l-2 border-border pl-6">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                            <div className="text-muted">
                                                Request logged as{' '}
                                                <span className="font-mono text-sm text-foreground border border-border bg-accent px-2 py-1 rounded">
                                                    {accessToken}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                            <div className="text-muted">
                                                Added to <span className="text-foreground italic">Eager Innovators</span> list
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                            <div className="text-muted">
                                                Project attempted: <span className="text-foreground">{projectName}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Instructions */}
                                    <div className="border-t border-border pt-10">
                                        <h3 className="text-xl md:text-2xl font-light mb-6 text-foreground">
                                            Interested in collaboration?
                                        </h3>
                                        <ol className="space-y-5 text-muted">
                                            <li className="flex gap-5">
                                                <span className="text-muted/40 font-mono text-sm">01</span>
                                                <span>Connect with me on LinkedIn with a personalized message</span>
                                            </li>
                                            <li className="flex gap-5">
                                                <span className="text-muted/40 font-mono text-sm">02</span>
                                                <span>
                                                    Mention your access ID:{' '}
                                                    <span className="font-mono text-sm text-foreground">{accessToken}</span>
                                                </span>
                                            </li>
                                            <li className="flex gap-5">
                                                <span className="text-muted/40 font-mono text-sm">03</span>
                                                <span>I'll personally share relevant insights and discuss opportunities</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Stats - theme aware */}
                                <div className="mb-12 md:mb-16">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <h2
                                            className="text-2xl md:text-3xl font-light text-foreground"
                                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                        >
                                            Live Analytics
                                        </h2>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="group border border-border bg-accent p-8 hover:border-muted transition-all duration-500 stat-card">
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4 font-medium">
                                                Total Attempts
                                            </div>
                                            <div className="text-5xl font-light text-foreground group-hover:text-blue-500 transition-colors duration-500">
                                                {stats.totalAttempts.toLocaleString()}
                                            </div>
                                        </div>

                                        <div className="group border border-border bg-accent p-8 hover:border-muted transition-all duration-500 stat-card">
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4 font-medium">
                                                Today
                                            </div>
                                            <div className="text-5xl font-light text-foreground group-hover:text-green-500 transition-colors duration-500">
                                                {stats.todayAttempts}
                                            </div>
                                        </div>

                                        <div className="group border border-border bg-accent p-8 hover:border-muted transition-all duration-500 stat-card">
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4 font-medium">
                                                Your Position
                                            </div>
                                            <div className="text-5xl font-light text-foreground group-hover:text-purple-500 transition-colors duration-500">
                                                #{stats.yourPosition}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions - theme aware */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={siteConfig.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group px-10 py-5 bg-foreground text-background text-center font-medium hover:opacity-90 transition-all duration-300 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Connect on LinkedIn</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="px-10 py-5 border border-border text-foreground hover:border-muted hover:bg-accent transition-all duration-300"
                                    >
                                        Back to Portfolio
                                    </button>
                                </div>

                                {/* Footer */}
                                <div className="mt-12 text-sm text-muted/60">
                                    <p>Your interest has been recorded. Thank you for your curiosity.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes backdropFade {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(12px); }
        }

        @keyframes modalEntry {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes lineSlideIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Theme-aware shadows */
        .modal-shadow {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 
                      0 0 0 1px var(--border);
        }

        .light .modal-shadow {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                      0 10px 10px -5px rgba(0, 0, 0, 0.04),
                      0 0 0 1px var(--border);
        }

        /* Terminal glow effect */
        .terminal-glow {
          box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.03);
        }

        .light .terminal-glow {
          box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05);
        }

        /* Stat card effects */
        .stat-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-2px);
        }

        /* Custom scrollbar - theme aware */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--background);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--muted);
        }
      `}</style>
        </>
    );
};

export default ProjectAccessModal;

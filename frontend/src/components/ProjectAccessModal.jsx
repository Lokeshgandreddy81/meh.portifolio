import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import SpotlightButton from './ui/SpotlightButton';

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

        const isSara = projectName === 'Sara.ai';

        const baseSequence = [
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
            }
        ];

        const sequence = isSara ? [
            ...baseSequence,
            {
                text: 'ACCESS GRANTED - Connection established to live server',
                status: 'success',
                duration: 2500
            }
        ] : [
            ...baseSequence,
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
                    setStage(isSara ? 'granted' : 'denied');
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
            {/* Ultra-Premium Glassmorphism backdrop */}
            <div
                className="fixed inset-0 bg-background/40 backdrop-blur-[40px] saturate-[200%] z-[100] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ animation: 'backdropFade 0.8s cubic-bezier(0.16,1,0.3,1)' }}
                onClick={onClose}
            />

            {/* Modal - fully theme aware */}
            <div
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                style={{ animation: 'modalEntry 1s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                <div
                    className="bg-background/90 backdrop-blur-3xl border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-hidden pointer-events-auto relative shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-xl"
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
                            /* ===== LOADING STAGE: CRYPTOGRAPHIC UNLOCK (Google-Tier UI) ===== */
                            <div className="px-6 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">

                                {/* Background Ambient Bloom */}
                                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40">
                                    <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                                    <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                                </div>

                                <div className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto text-center">

                                    {/* The Cryptographic Ring */}
                                    <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
                                        {/* Outer track */}
                                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                            {/* Animated Progress Ring */}
                                            <circle
                                                cx="50" cy="50" r="48" fill="none"
                                                stroke="url(#gradient)" strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeDasharray="301.59"
                                                strokeDashoffset={301.59 - (301.59 * (terminalLines.length / 5))}
                                                className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#3b82f6" />
                                                    <stop offset="50%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="#ec4899" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Inner percentage / Counter */}
                                        <div className="absolute flex flex-col items-center justify-center">
                                            <span className="text-3xl font-light text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                {Math.round((terminalLines.length / 5) * 100)}<span className="text-sm text-foreground/40 font-mono">%</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Name & Identifier */}
                                    <div className="mb-8">
                                        <h2
                                            className="text-3xl md:text-5xl font-light leading-tight text-foreground tracking-tight"
                                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                        >
                                            {projectName}
                                        </h2>
                                        <div className="flex items-center justify-center gap-3 mt-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/40">
                                                Authenticating Request
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sleek Status Readout (Replaces generic terminal) */}
                                    <div className="w-full relative h-[60px] flex items-center justify-center overflow-hidden">
                                        {currentLine.text ? (
                                            <p
                                                key={currentLine.text}
                                                className="absolute font-mono text-xs md:text-sm text-foreground/70 tracking-wide text-center"
                                                style={{ animation: 'statusFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards' }}
                                            >
                                                {currentLine.text}
                                            </p>
                                        ) : terminalLines.length > 0 ? (
                                            <p
                                                key={terminalLines[terminalLines.length - 1].text}
                                                className="absolute font-mono text-xs md:text-sm text-foreground/40 tracking-wide text-center opacity-50"
                                            >
                                                {terminalLines[terminalLines.length - 1].text}
                                                {terminalLines[terminalLines.length - 1].status === 'success' && <span className="ml-2 text-green-400">✓</span>}
                                                {terminalLines[terminalLines.length - 1].status === 'error' && <span className="ml-2 text-red-400">✗</span>}
                                            </p>
                                        ) : null}
                                    </div>

                                    {/* Security Metadata Footer */}
                                    <div className="mt-12 w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                                        <div className="flex flex-col">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/30 mb-1">Session ID</span>
                                            <span className="font-mono text-[10px] text-blue-400/80">{accessToken}</span>
                                        </div>
                                        <div className="flex flex-col md:text-right">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/30 mb-1">Encryption Protocol</span>
                                            <span className="font-mono text-[10px] text-foreground/60">AES-256-GCM / TLS 1.3</span>
                                        </div>
                                    </div>

                                </div>
                                <style>{`
                                    @keyframes statusFadeUp {
                                        0% { opacity: 0; transform: translateY(10px); }
                                        100% { opacity: 1; transform: translateY(0); }
                                    }
                                `}</style>
                            </div>
                        ) : stage === 'denied' ? (
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
                        ) : (
                            /* ===== GRANTED STAGE ===== */
                            <div className="px-8 md:px-16 py-12 md:py-20 animate-[fade-in_1s_ease-out]">
                                {/* Header */}
                                <div className="mb-10 md:mb-14 flex justify-between items-start flex-wrap gap-6 border-b border-border pb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <CheckCircle2 size={20} className="text-green-500" />
                                            <span className="text-xs uppercase tracking-[0.2em] text-muted">Access Granted</span>
                                        </div>
                                        <h1
                                            className="text-4xl md:text-5xl font-light leading-[1.1] text-foreground mb-3"
                                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                                        >
                                            {projectName} <span className="text-muted text-3xl hidden md:inline">|</span> <br className="md:hidden" />Live Preview
                                        </h1>
                                        <p className="text-lg text-muted italic max-w-2xl">
                                            "Production is where theory meets reality."
                                        </p>
                                    </div>

                                    <div className="bg-accent/50 border border-white/5 backdrop-blur-md px-4 py-3 rounded-full flex items-center gap-3 self-start shadow-xl">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                                        <span className="text-xs tracking-widest uppercase font-mono text-foreground/80">System Online</span>
                                    </div>
                                </div>

                                {/* Main Content: Browser Tab Preview */}
                                <div className="mb-12 border border-white/10 bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
                                    {/* Detailed macOS-like header */}
                                    <div className="bg-[#1e1e1e]/90 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm hover:bg-[#ff5f56]/80 transition-colors" />
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm hover:bg-[#ffbd2e]/80 transition-colors" />
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm hover:bg-[#27c93f]/80 transition-colors" />
                                        </div>
                                        <div className="flex-1 flex justify-center px-4">
                                            <div className="w-full max-w-md bg-black/40 border border-white/5 rounded-md px-4 py-1.5 flex items-center justify-center">
                                                <span className="text-[11px] font-mono text-white/50 tracking-wider">
                                                    sara-ai.in
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-12 flex justify-end">
                                            <a href="http://sara-ai.in" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300">
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Iframe Content */}
                                    <div className="w-full bg-background relative" style={{ paddingBottom: '56.25%', minHeight: '350px' }}>
                                        <iframe
                                            src="http://sara-ai.in"
                                            title="Sara.ai Preview"
                                            className="absolute inset-0 w-full h-full border-none"
                                            loading="lazy"
                                        />

                                        {/* Hover overlay hint */}
                                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-10">
                                            <a
                                                href="http://sara-ai.in"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-foreground text-background font-medium pointer-events-auto hover:bg-foreground/90 transition-all shadow-xl flex items-center gap-2"
                                            >
                                                Open Interactive Experience <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions - Spotlight Buttons */}
                                <p className="text-[11px] text-muted/60 uppercase tracking-[0.2em] mb-6 font-medium">Resources & Links</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {/* 1. Website Spotlight Button */}
                                    <SpotlightButton
                                        href="http://sara-ai.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group px-6 py-4 bg-foreground text-background text-center font-medium hover:opacity-95 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 rounded-xl"
                                    >
                                        <span className="relative z-10">Visit Website</span>
                                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                    </SpotlightButton>

                                    {/* 2. GitHub Spotlight Button */}
                                    <SpotlightButton
                                        href="https://github.com/Lokeshgandreddy81/Sara"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group px-6 py-4 border border-white/10 bg-accent/50 text-foreground hover:border-white/20 hover:bg-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 rounded-xl"
                                    >
                                        <Github size={18} className="relative z-10" />
                                        <span className="relative z-10">Source Code</span>
                                    </SpotlightButton>

                                    {/* 3. LinkedIn Spotlight Button */}
                                    <SpotlightButton
                                        href={siteConfig.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group px-6 py-4 border border-white/10 bg-accent/50 text-foreground hover:border-white/20 hover:bg-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 rounded-xl"
                                    >
                                        <Linkedin size={18} className="relative z-10" />
                                        <span className="relative z-10">Developer Profile</span>
                                    </SpotlightButton>
                                </div>
                            </div>
                        )}
                    </div >
                </div >
            </div >

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

        @keyframes decryptionEntry {
          0% {
            opacity: 0;
            transform: translateX(-10px);
            filter: blur(4px);
            font-weight: 100;
          }
          50% {
            opacity: 0.5;
            font-weight: 900;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
            font-weight: 400;
          }
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

        @keyframes termLineIn {
          from { opacity: 0; transform: translateX(-8px); filter: blur(2px); }
          to   { opacity: 1; transform: translateX(0);    filter: blur(0); }
        }

        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

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

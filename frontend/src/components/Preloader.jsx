import React, { useState, useEffect, useRef } from 'react';

/* ────────────────────────────────────────────────────────────────────────────
   Designer-grade ∞ lemniscate  — wider, flatter, golden proportions
   ViewBox: 0 0 320 130  |  Center: (160,65)
   The crossing is at the natural ≈ 45° angle of a proper lemniscate.
   Loops are slightly taller than a circle — elegant, not pudgy.
──────────────────────────────────────────────────────────────────────────── */
const PATH =
    'M 160,65 ' +
    'C 160,28 202,8  238,8 ' +
    'C 285,8 312,34  312,65 ' +
    'C 312,96 285,122 238,122 ' +
    'C 202,122 160,102 160,65 ' +
    'C 160,28 118,8   82,8 ' +
    'C 35,8   8,34    8,65 ' +
    'C 8,96   35,122  82,122 ' +
    'C 118,122 160,102 160,65';

const PATH_LEN = 860; // approximate arc length at this scale
const DASH = 110; // streak length  — roughly 1/8 of path

/* ── Shared AudioContext (one per page, resumed before every use) ─────────
   Browsers suspend new contexts without a user gesture; calling resume()
   right before scheduling notes is the correct cross-browser fix.
────────────────────────────────────────────────────────────────────────── */
let _audioCtx = null;
const getCtx = () => {
    if (!_audioCtx) {
        _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return _audioCtx;
};

const playLoadingPulse = async () => {
    try {
        const ctx = getCtx();
        await ctx.resume(); // unlock any suspended context

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = 'triangle'; // softer timbre than square, more present than sine
        osc.frequency.value = 440;        // A4

        const t = ctx.currentTime;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.45, t + 0.04); // clearly audible
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
        osc.start(t);
        osc.stop(t + 0.4);
    } catch (e) {
        // AudioContext blocked by strict browser policy — silently continue
    }
};

/* ── Log messages ─────────────────────────────────────────────────────── */
const LOGS = [
    'Booting neural interface…',
    'Calibrating aesthetic engine…',
    'Loading architecture modules…',
    'Mapping design systems…',
    'Initializing interaction layer…',
    'Compiling visual cortex…',
    'All systems operational.',
];

/* ══════════════════════════════════════════════════════════════════════════
   Preloader
══════════════════════════════════════════════════════════════════════════ */
const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('idle');
    const [logIdx, setLogIdx] = useState(0);
    const pulseRef = useRef(null);

    /* ── Progress ticker ──────────────────────────────────────────────── */
    useEffect(() => {
        const start = setTimeout(() => {
            setPhase('loading');

            // Start the loading pulse — fires every 1.4 s while loading
            pulseRef.current = setInterval(() => {
                playLoadingPulse();
            }, 1400);
            playLoadingPulse(); // first beat immediately

            let p = 0;
            const iv = setInterval(() => {
                p += Math.random() * 9 + 2;
                if (p >= 100) {
                    p = 100;
                    clearInterval(iv);
                    clearInterval(pulseRef.current); // stop pulse when done
                    setPhase('done');
                    setTimeout(() => {
                        setPhase('exit');
                        setTimeout(onComplete, 900);
                    }, 750);
                }
                setProgress(Math.floor(p));
                setLogIdx(Math.floor((p / 100) * (LOGS.length - 1)));
            }, 110);
        }, 350);
        return () => {
            clearTimeout(start);
            clearInterval(pulseRef.current);
        };
    }, [onComplete]);

    const exiting = phase === 'exit';
    const visible = phase !== 'idle';

    return (
        <div
            className="fixed inset-0 z-[200] overflow-hidden"
            style={{
                background: '#030303',
                clipPath: exiting
                    ? 'inset(50% 0 50% round 2px)'
                    : 'inset(0% 0% 0% 0%)',
                transition: exiting
                    ? 'clip-path 0.9s cubic-bezier(0.85,0,0.15,1)'
                    : 'none',
            }}
        >
            {/* ── Background colour orbs ─────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[
                    {
                        style: {
                            width: '55vw', height: '55vw', top: '-10%', left: '-10%',
                            background: 'radial-gradient(circle, #1e40af 0%, #1d4ed8 35%, #312e81 65%, transparent 82%)',
                            animation: 'pOrbA 11s ease-in-out infinite'
                        }
                    },
                    {
                        style: {
                            width: '42vw', height: '42vw', bottom: '-5%', right: '-5%',
                            background: 'radial-gradient(circle, #7c3aed 0%, #4c1d95 55%, transparent 78%)',
                            animation: 'pOrbB 13s ease-in-out infinite'
                        }
                    },
                    {
                        style: {
                            width: '30vw', height: '30vw', top: '38%', right: '12%',
                            background: 'radial-gradient(circle, #db2777 0%, #9d174d 60%, transparent 80%)',
                            animation: 'pOrbC 9s ease-in-out infinite'
                        }
                    },
                ].map((o, i) => (
                    <div key={i} style={{
                        position: 'absolute', borderRadius: '50%',
                        filter: 'blur(80px)', opacity: i === 0 ? 0.3 : i === 1 ? 0.22 : 0.16,
                        mixBlendMode: 'screen',
                        ...o.style,
                    }} />
                ))}
                {/* Subtle dot grid */}
                <div className="absolute inset-0 opacity-[0.025]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />
            </div>

            {/* ── Corner micro-labels ────────────────────────────────────── */}
            {[
                ['top-6 left-8', 'G.L'],
                ['top-6 right-8', 'System Init'],
                ['bottom-6 left-8', 'v2025'],
                ['bottom-6 right-8', 'Portfolio OS'],
            ].map(([pos, txt]) => (
                <div key={txt}
                    className={`absolute ${pos} font-mono text-[10px] uppercase tracking-[0.4em]`}
                    style={{ color: txt.length < 6 ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.14)' }}>
                    {txt}
                </div>
            ))}

            {/* ══ CENTRE STAGE ══════════════════════════════════════════════ */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">

                {/* Eyebrow */}
                <div className="flex items-center gap-4"
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
                    <div className="w-8 h-[1px] bg-white/20" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.55em] text-white/28">
                        System Initialization
                    </span>
                    <div className="w-8 h-[1px] bg-white/20" />
                </div>

                {/* ── ∞ Infinity SVG ─────────────────────────────────────── */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transition: 'opacity 1s ease 0.15s',
                        filter:
                            'drop-shadow(0 0 14px rgba(139,92,246,0.6)) ' +
                            'drop-shadow(0 0 36px rgba(59,130,246,0.35))',
                    }}
                >
                    <svg
                        width="320" height="130"
                        viewBox="0 0 320 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            {/* Primary gradient: blue → violet → pink → blue, mapped to path x-range */}
                            <linearGradient id="lgMain" x1="8" y1="65" x2="312" y2="65"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#2a8af6" />
                                <stop offset="32%" stopColor="#7c3aed" />
                                <stop offset="60%" stopColor="#a853ba" />
                                <stop offset="84%" stopColor="#e92a67" />
                                <stop offset="100%" stopColor="#2a8af6" />
                            </linearGradient>

                            {/* Wider, semi-transparent halo gradient */}
                            <linearGradient id="lgHalo" x1="8" y1="65" x2="312" y2="65"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#2a8af6" stopOpacity="0.5" />
                                <stop offset="40%" stopColor="#a853ba" stopOpacity="0.5" />
                                <stop offset="70%" stopColor="#e92a67" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#2a8af6" stopOpacity="0.5" />
                            </linearGradient>

                            {/* Soft blur for outer glow ring */}
                            <filter id="fHalo" x="-20%" y="-80%" width="140%" height="260%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
                            </filter>

                            {/* Sharp inner glow (less blur) for mid layer */}
                            <filter id="fInner" x="-10%" y="-40%" width="120%" height="180%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
                            </filter>
                        </defs>

                        {/* 1 ── Faint full-path track */}
                        <path
                            d={PATH}
                            stroke="rgba(255,255,255,0.07)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        {/* 2 ── Outer wide halo (most blurred, wide stroke) */}
                        <path
                            d={PATH}
                            stroke="url(#lgHalo)"
                            strokeWidth="18"
                            strokeLinecap="round"
                            strokeDasharray={`${DASH} ${PATH_LEN - DASH}`}
                            filter="url(#fHalo)"
                            style={{ animation: `pFlow 2.6s linear infinite` }}
                        />

                        {/* 3 ── Mid glow ring (lighter blur, thinner) */}
                        <path
                            d={PATH}
                            stroke="url(#lgMain)"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={`${DASH} ${PATH_LEN - DASH}`}
                            filter="url(#fInner)"
                            style={{ animation: `pFlow 2.6s linear infinite` }}
                        />

                        {/* 4 ── Core vivid streak */}
                        <path
                            d={PATH}
                            stroke="url(#lgMain)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray={`${DASH} ${PATH_LEN - DASH}`}
                            style={{ animation: `pFlow 2.6s linear infinite` }}
                        />

                        {/* 5 ── Bright white leading dot */}
                        <path
                            d={PATH}
                            stroke="rgba(255,255,255,0.9)"
                            strokeWidth="4.5"
                            strokeLinecap="round"
                            strokeDasharray={`3 ${PATH_LEN - 3}`}
                            style={{ animation: `pFlow 2.6s linear infinite` }}
                        />
                    </svg>
                </div>

                {/* Percentage + log ─────────────────────────────────────── */}
                <div
                    className="flex flex-col items-center gap-3"
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}
                >
                    <div className="flex items-end gap-1 leading-none">
                        <span
                            className="font-mono font-light tabular-nums text-white/72"
                            style={{ fontSize: 'clamp(2.8rem,6vw,4rem)' }}
                        >
                            {progress}
                        </span>
                        <span className="font-mono text-xl text-white/28 mb-1">%</span>
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-center"
                        style={{ color: phase === 'done' ? '#4ade80' : 'rgba(255,255,255,0.28)' }}>
                        {phase === 'done' ? '✓  Ready.' : LOGS[logIdx]}
                    </p>
                </div>
            </div>

            {/* ── Keyframes ─────────────────────────────────────────────── */}
            <style>{`
        @keyframes pFlow {
          from { stroke-dashoffset:  0; }
          to   { stroke-dashoffset: -${PATH_LEN}; }
        }
        @keyframes pOrbA {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(4%,3%)   scale(1.06); }
          66%     { transform: translate(-3%,5%)  scale(0.96); }
        }
        @keyframes pOrbB {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-5%,-4%) scale(1.09); }
          70%     { transform: translate(3%,-2%)  scale(0.94); }
        }
        @keyframes pOrbC {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-4%,6%)  scale(1.12); }
        }
      `}</style>
        </div>
    );
};

export default Preloader;

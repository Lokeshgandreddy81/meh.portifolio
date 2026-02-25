import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis for buttery, un-janky scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease out expo
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Listen to scroll and broadcast lerped value back to CSS for Parallax Sync
        lenis.on('scroll', (e) => {
            document.body.style.setProperty('--scroll-y', e.animatedScroll);
        });

        // Native RAF loop for Lenis
        function raf(time) {
            if (lenisRef.current) {
                lenisRef.current.raf(time);
            }
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="lenis-wrapper relative w-full h-full">
            {children}
        </div>
    );
};

export default SmoothScroll;

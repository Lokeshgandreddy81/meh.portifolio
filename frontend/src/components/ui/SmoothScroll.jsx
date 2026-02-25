import React, { useRef, useEffect, useState } from 'react';

const SmoothScroll = ({ children }) => {
    const scrollContainerRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const setBodyHeight = () => {
            if (scrollContainerRef.current) {
                setWindowHeight(scrollContainerRef.current.getBoundingClientRect().height);
            }
        };

        setBodyHeight();

        const resizeObserver = new ResizeObserver(() => setBodyHeight());
        if (scrollContainerRef.current) {
            resizeObserver.observe(scrollContainerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [children]);

    useEffect(() => {
        document.body.style.height = `${windowHeight}px`;
    }, [windowHeight]);

    useEffect(() => {
        let animationFrameId;

        // Configuration for inertia moved inside effect to prevent dependency warnings
        const config = {
            ease: 0.15,
            currentY: 0,
            targetY: 0
        };

        const smoothScroll = () => {
            config.targetY = window.scrollY;

            // Lerp (Linear Interpolation) for that smooth inertia
            config.currentY += (config.targetY - config.currentY) * config.ease;

            // Write the lerped value to a global CSS variable so children (like Hero parallax)
            // can perfectly synchronize with the smooth scroll instead of fighting raw window.scrollY
            document.body.style.setProperty('--scroll-y', config.currentY);

            // Apply transform to the container with 3D hardware acceleration
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.transform = `translate3d(0, -${config.currentY}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(smoothScroll);
        };

        smoothScroll();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full overflow-hidden"
            style={{ height: '100vh' }}
        >
            <div
                ref={scrollContainerRef}
                className="will-change-transform w-full"
            >
                {children}
            </div>
        </div>
    );
};

export default SmoothScroll;

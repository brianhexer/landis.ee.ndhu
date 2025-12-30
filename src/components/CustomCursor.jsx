import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [dpr, setDpr] = useState(1);

    // Detect device pixel ratio for high DPI support
    useEffect(() => {
        const updateDpr = () => {
            setDpr(Math.min(window.devicePixelRatio || 1, 3));
        };
        updateDpr();

        // Listen for DPR changes (e.g., moving between monitors)
        const mediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        mediaQuery.addEventListener?.('change', updateDpr);

        return () => {
            mediaQuery.removeEventListener?.('change', updateDpr);
        };
    }, []);

    // Calculate cursor size based on DPI
    const cursorSize = useMemo(() => {
        const baseSize = 12;
        return baseSize * (dpr > 1 ? 1 + (dpr - 1) * 0.2 : 1);
    }, [dpr]);

    // Optimized spring config - snappier for high DPI
    const springConfig = useMemo(() => ({
        damping: 25,
        stiffness: 400,
        mass: 0.3,
        restDelta: 0.001 / dpr // Finer rest threshold for high DPI
    }), [dpr]);

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        let rafId = null;
        const offset = cursorSize / 2;

        const moveCursor = (e) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                // Use subpixel positioning for smoother movement on high DPI
                const x = Math.round(e.clientX * dpr) / dpr - offset;
                const y = Math.round(e.clientY * dpr) / dpr - offset;
                cursorX.set(x);
                cursorY.set(y);
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]');
            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, cursorSize, dpr]);

    return (
        <motion.div
            animate={{
                scale: isHovering ? 1.4 : 1,
                opacity: isHovering ? 0.85 : 1,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                width: cursorSize,
                height: cursorSize,
                // Force GPU acceleration
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
            }}
            className="hidden md:block fixed top-0 left-0 bg-[#9372FF] rounded-full pointer-events-none z-[99999] mix-blend-difference shadow-[0_0_10px_rgba(147,114,255,0.9)] will-change-transform"
        />
    );
};

export default CustomCursor;

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

// Mobile Touch Trace Effect
const MobileTouchTrace = () => {
    const [touches, setTouches] = useState([]);
    const touchIdCounter = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e) => {
            const newTouches = Array.from(e.touches).map(touch => ({
                id: touchIdCounter.current++,
                x: touch.clientX,
                y: touch.clientY,
                timestamp: Date.now()
            }));
            setTouches(prev => [...prev, ...newTouches].slice(-15)); // Keep max 15 particles
        };

        const handleTouchMove = (e) => {
            const newTouches = Array.from(e.touches).map(touch => ({
                id: touchIdCounter.current++,
                x: touch.clientX,
                y: touch.clientY,
                timestamp: Date.now()
            }));
            setTouches(prev => [...prev, ...newTouches].slice(-15));
        };

        const handleTouchEnd = () => {
            // Clear old particles after touch ends
            setTimeout(() => {
                setTouches(prev => prev.filter(t => Date.now() - t.timestamp < 500));
            }, 100);
        };

        // Cleanup old particles periodically
        const cleanupInterval = setInterval(() => {
            setTouches(prev => prev.filter(t => Date.now() - t.timestamp < 600));
        }, 100);

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            clearInterval(cleanupInterval);
        };
    }, []);

    return (
        <div className="md:hidden fixed inset-0 pointer-events-none z-[99998] overflow-hidden">
            <AnimatePresence>
                {touches.map((touch) => (
                    <motion.div
                        key={touch.id}
                        initial={{
                            opacity: 0.9,
                            scale: 1,
                            x: touch.x - 15,
                            y: touch.y - 15
                        }}
                        animate={{
                            opacity: 0,
                            scale: 2.5
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className="absolute w-[30px] h-[30px] rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(147,114,255,0.8) 0%, rgba(147,114,255,0.4) 40%, transparent 70%)',
                            boxShadow: '0 0 20px rgba(147,114,255,0.8), 0 0 40px rgba(147,114,255,0.4), 0 0 60px rgba(147,114,255,0.2)',
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
            </AnimatePresence>
            {/* Central touch indicator */}
            <AnimatePresence>
                {touches.length > 0 && (
                    <motion.div
                        key="center-glow"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute w-[16px] h-[16px] rounded-full pointer-events-none"
                        style={{
                            left: touches[touches.length - 1]?.x - 8,
                            top: touches[touches.length - 1]?.y - 8,
                            background: 'rgba(147,114,255,1)',
                            boxShadow: '0 0 15px rgba(147,114,255,1), 0 0 30px rgba(147,114,255,0.8)',
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

// Desktop Custom Cursor
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
        <>
            {/* Mobile Touch Trace */}
            <MobileTouchTrace />

            {/* Desktop Cursor */}
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
        </>
    );
};

export default CustomCursor;


import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Mobile Touch Trace Effect - Neon Line Trail (Canvas-based for performance)
const MobileTouchTrace = () => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            pointsRef.current = [{ x: touch.clientX, y: touch.clientY, age: 0 }];
        };

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            const lastPoint = pointsRef.current[pointsRef.current.length - 1];

            // Only add point if moved enough distance (optimization)
            if (lastPoint) {
                const dx = touch.clientX - lastPoint.x;
                const dy = touch.clientY - lastPoint.y;
                if (dx * dx + dy * dy < 16) return; // Min 4px movement
            }

            pointsRef.current.push({ x: touch.clientX, y: touch.clientY, age: 0 });
            // Keep max 30 points for smooth trail
            if (pointsRef.current.length > 30) {
                pointsRef.current.shift();
            }
        };

        const handleTouchEnd = () => {
            // Points will fade out naturally
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

            const points = pointsRef.current;

            // Age all points and remove old ones
            for (let i = points.length - 1; i >= 0; i--) {
                points[i].age += 0.02;
                if (points[i].age > 1) {
                    points.splice(i, 1);
                }
            }

            if (points.length < 2) {
                animationRef.current = requestAnimationFrame(draw);
                return;
            }

            // Draw neon line trail
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Draw multiple layers for neon glow effect
            const layers = [
                { width: 12, alpha: 0.1, blur: 15 },
                { width: 8, alpha: 0.3, blur: 8 },
                { width: 4, alpha: 0.6, blur: 4 },
                { width: 2, alpha: 1, blur: 0 }
            ];

            layers.forEach(layer => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(147, 114, 255, ${layer.alpha})`;
                ctx.lineWidth = layer.width;
                ctx.filter = layer.blur > 0 ? `blur(${layer.blur}px)` : 'none';

                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    const opacity = 1 - point.age;

                    if (i === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        // Smooth curve using quadratic bezier
                        const prev = points[i - 1];
                        const midX = (prev.x + point.x) / 2;
                        const midY = (prev.y + point.y) / 2;
                        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
                    }
                }
                ctx.stroke();
                ctx.filter = 'none';
            });

            // Draw bright tip at the last point
            if (points.length > 0) {
                const lastPoint = points[points.length - 1];
                const tipOpacity = 1 - lastPoint.age;

                // Outer glow
                ctx.beginPath();
                ctx.arc(lastPoint.x, lastPoint.y, 8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147, 114, 255, ${0.3 * tipOpacity})`;
                ctx.filter = 'blur(6px)';
                ctx.fill();
                ctx.filter = 'none';

                // Inner bright dot
                ctx.beginPath();
                ctx.arc(lastPoint.x, lastPoint.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 180, 255, ${tipOpacity})`;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });

        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="md:hidden fixed inset-0 pointer-events-none z-[99998]"
            style={{ width: '100%', height: '100%' }}
        />
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


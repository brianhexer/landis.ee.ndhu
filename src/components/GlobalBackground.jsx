import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const InteractivePixelGrid = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Static texture noise (calculated once)
        let gridMap = [];

        const initGrid = () => {
            gridMap = [];
            const gridSize = 15;
            const cols = Math.ceil(window.innerWidth / gridSize);
            const rows = Math.ceil(window.innerHeight / gridSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    // Pre-calculate a static 'randomness' for each pixel so they don't look uniform
                    gridMap.push({
                        x: i * gridSize,
                        y: j * gridSize,
                        // Subtle visibility: 3-8% base
                        baseOpacity: Math.random() * 0.05 + 0.03,
                        isAccent: Math.random() > 0.8, // 20% chance to be accent
                        speed: Math.random() * 1 + 0.5,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const resize = () => {
            // Handle DPI
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            initGrid();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear

            const isDark = document.documentElement.classList.contains('dark');
            const colorBase = isDark ? [150, 150, 150] : [20, 20, 20]; // Darker base for light mode visibility
            // Standard dots turn Purple, Accents turn White (Sparkle)
            const colorActive = [147, 114, 255]; // Purple brand
            const colorAccent = [0, 0, 0]; // Black sparkle

            const gridSize = 15;
            const size = gridSize * 0.35; // Pixel size
            const offset = (gridSize - size) / 2;

            const time = Date.now() / 1000;

            gridMap.forEach(dot => {
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Interaction Radius
                const radius = 180;
                let activeFactor = 0;

                if (dist < radius) {
                    activeFactor = 1 - Math.pow(dist / radius, 2);
                }

                // Wave Animation
                // Twinkle Animation (Trae-like)
                const twinkle = Math.sin(time * dot.speed + dot.phase) * 0.5 + 0.5;
                // Boosted brightness for wave effect
                const currentBase = dot.baseOpacity * (0.5 + 2.0 * twinkle);

                // Opacity: Gentle flashlight
                const renderOpacity = Math.min(0.5, currentBase + activeFactor * 0.35);

                // Skip invisible dots optimization
                if (renderOpacity < 0.005) return;

                // Color Mixing
                let r, g, b;
                if (activeFactor > 0.1) {
                    // Lit up: Mix active (white) and accent (teal)
                    const c = dot.isAccent ? colorAccent : colorActive;
                    // Blend logic adjusted for lower ranges
                    const blend = Math.min(1, activeFactor * 2);
                    r = colorBase[0] * (1 - blend) + c[0] * blend;
                    g = colorBase[1] * (1 - blend) + c[1] * blend;
                    b = colorBase[2] * (1 - blend) + c[2] * blend;
                } else {
                    [r, g, b] = colorBase;
                }

                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${renderOpacity})`;
                ctx.fillRect(dot.x + offset, dot.y + offset, size, size);
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        // Theme observer
        const observer = new MutationObserver(() => { });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    // Z-index: High overlay but blended, removed external opacity class
    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />;
};

const TraeVignette = () => (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,182,212,0.15)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,182,212,0.1)_100%)] mix-blend-multiply dark:mix-blend-screen" />
);

const GlobalBackground = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <>
            {/* 1. Base Background Color (Lowest Layer) */}
            <div className="fixed inset-0 z-[-50] bg-background dark:bg-[#050508]" />

            {/* 2. Overlay Effects (Highest Layer) - Allows Reveal Effect to work */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                {/* Deep Space Parallax - Fixed */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.accent.purple/10),transparent_70%)] opacity-50 mix-blend-screen"
                />

                {/* Pixel Grid */}
                <InteractivePixelGrid />

                {/* Vignette */}
                <TraeVignette />
            </div>
        </>
    );
};

export default GlobalBackground;

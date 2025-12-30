import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 10, stiffness: 2000, mass: 0.1 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 7.5);
            cursorY.set(e.clientY - 7.5);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            className="hidden md:block fixed top-0 left-0 w-[15px] h-[15px] bg-[#9372FF] rounded-full pointer-events-none z-[99999] mix-blend-difference shadow-[0_0_12px_rgba(147,114,255,0.8)] will-change-transform"
        />
    );
};

export default CustomCursor;

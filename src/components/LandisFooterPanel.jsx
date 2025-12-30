import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandisFooterPanel = () => {
    const { scrollYProgress } = useScroll();

    // Fade in when scroll is near the bottom (0.9 to 1.0)
    const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0.85, 1], [50, 0]);

    return (
        <div className="fixed bottom-24 sm:bottom-8 left-0 w-full h-[40vh] z-[-2] flex items-end justify-center pointer-events-none overflow-hidden">
            <motion.div style={{ opacity, y }} className="w-full flex justify-between px-[2vw]">
                {['L', 'A', 'N', 'D', 'I', 'S'].map((letter, index) => (
                    <span key={index} className="text-[23vw] sm:text-[20vw] md:text-[22vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-white/15 to-transparent leading-none select-none">
                        {letter}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default LandisFooterPanel;

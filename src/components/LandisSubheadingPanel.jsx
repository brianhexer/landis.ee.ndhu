import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandisSubheadingPanel = () => {
    const { scrollYProgress } = useScroll();

    // Fade in text slightly later than the main title for a staggered effect
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

    return (
        <div className="fixed bottom-1 sm:bottom-2 left-0 w-full z-[-1] flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div style={{ opacity, y }} className="w-full px-[2vw]">
                <span className="text-[8px] sm:text-[10px] md:text-[0.9vw] font-light tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] text-white/50 uppercase w-full block text-center whitespace-nowrap">
                    Laboratory for Advanced Networks & Distributed Intelligent Systems
                </span>
            </motion.div>
        </div>
    );
};

export default LandisSubheadingPanel;

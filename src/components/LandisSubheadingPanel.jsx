import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandisSubheadingPanel = () => {
    const { scrollYProgress } = useScroll();

    // Fade in text slightly later than the main title for a staggered effect
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

    return (
        <div className="fixed bottom-8 left-0 w-full z-[-1] flex items-center justify-center pointer-events-none overflow-hidden pb-4">
            <motion.div style={{ opacity, y }} className="w-full text-center">
                <span className="text-[10px] md:text-[0.95vw] font-light tracking-[0.75em] text-white/40 uppercase px-4 w-full block leading-relaxed">
                    Laboratory for Advanced Networks & Distributed Intelligent Systems
                </span>
            </motion.div>
        </div>
    );
};

export default LandisSubheadingPanel;

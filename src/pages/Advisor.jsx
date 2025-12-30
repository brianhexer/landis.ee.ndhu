import React from 'react';
import { motion } from 'framer-motion';
import advisorImg from '/images/advisor.jpg';

const Advisor = () => {
    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-20 md:py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 sm:mb-10 md:mb-12 text-center text-foreground dark:text-white"
            >
                Advisor
            </motion.h1>
            <div className="max-w-4xl mx-auto bg-card/40 dark:bg-card border border-accent-purple/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 text-center shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-xl"></div>
                    <img
                        src={advisorImg}
                        alt="Prof. Jen-Yeu Chen"
                        className="w-full h-full object-cover rounded-full border-4 border-accent-purple relative z-10 shadow-[0_0_20px_rgba(147,114,255,0.4)]"
                    />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-foreground dark:text-white">Prof. Jen-Yeu Chen</h2>
                <h3 className="text-base sm:text-lg md:text-xl text-accent-purple mb-4 sm:mb-6 md:mb-8">Professor, Dept. of Electrical Engineering</h3>
                <div className="text-left space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl mx-auto">
                    <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 border-b border-border dark:border-gray-800 pb-2 text-foreground dark:text-white">Education</h4>
                        <ul className="text-muted-foreground space-y-1 sm:space-y-2 text-sm sm:text-base">
                            <li>Purdue University, Ph.D.</li>
                            <li>National Cheng-Kung University, MS</li>
                            <li>National Cheng-Kung University, BS</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 border-b border-border dark:border-gray-800 pb-2 text-foreground dark:text-white">Contact</h4>
                        <ul className="text-muted-foreground space-y-1 sm:space-y-2 text-sm sm:text-base">
                            <li><span className="text-muted-foreground/70 w-16 sm:w-20 inline-block font-bold">Tel:</span> +886 38634088</li>
                            <li><span className="text-muted-foreground/70 w-16 sm:w-20 inline-block font-bold">Fax:</span> +886 38634060</li>
                            <li><span className="text-muted-foreground/70 w-16 sm:w-20 inline-block font-bold">Email:</span> <a href="mailto:jenyeu@gms.ndhu.edu.tw" className="text-accent-purple hover:underline break-all">jenyeu@gms.ndhu.edu.tw</a></li>
                            <li><span className="text-muted-foreground/70 w-16 sm:w-20 inline-block font-bold">Office:</span> D206, Engineering Building</li>
                            <li><span className="text-muted-foreground/70 w-16 sm:w-20 inline-block font-bold">Hours:</span> Wed. 12:00-14:00</li>
                        </ul>
                    </div>

                    <div className="pt-2 sm:pt-4">
                        <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                            For more information, please visit the <a href="https://sys.ndhu.edu.tw/RD/TeacherTreasury/tlist.aspx?tcher=11250" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">Personal Website</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advisor;

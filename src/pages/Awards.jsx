import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const awards = [
    {
        year: '2014',
        items: [
            { title: '恭賀 陳震宇 老師榮獲', content: ['東華大學 103年度 電機系 優良導師典範'] }
        ]
    },
    {
        year: '2013',
        items: [
            { title: '恭賀 陳震宇 老師榮獲', content: ['東華大學 102年度 電機系 與 理工學院 優良導師典範', '東華大學 102學年度 系優良導師', '東華大學 102學年度 院優良導師'] }
        ]
    },
    {
        year: '2012',
        items: [
            { title: '恭賀 陳震宇 老師榮獲', content: ['國際工程技術學會-IET-無線通訊及應用國際會議最佳論文獎 (IET-ICWCA 2012 Best Paper Award)', '國際電機電子學會 –IEEE- 消息理論領域 台北支會 暨 通訊領域 台北/台南支會 年輕學者最佳論文獎 (2011 IEEE ITSOC Taipei Chapter/ COMSOC Taipei and Tainan Chapter Young Scholar Best Paper Award)'] },
            { title: '恭賀 阮大維 與 黃承森 同學榮獲', content: ['國際工程技術學會-IET-無線通訊及應用國際會議最佳論文獎 (IET-ICWCA 2012 Best Paper Award)'] },
            { title: '恭賀 林金龍 同學榮獲', content: ['國立東華大學第101級電機工程研究所碩士班斐陶斐獎 (The Phi Tau Phi Scholastic Honor Society Scholarship)', '國立東華大學第101級電機工程研究所碩士班優秀學生獎 (Outstanding Master Graduates with Honors)'] }
        ]
    },
    {
        year: '2011',
        items: [
            { title: '恭賀 葉宸祐 同學', content: ['成績優異榮獲國立東華大學第100學年度第一學期 書卷獎'] },
            { title: '恭賀 林金龍 同學', content: ['成績優異榮獲國立東華大學第100學年度第一學期 書卷獎', '成績優異榮獲國立東華大學第100學年度第二學期 書卷獎'] },
            { title: '恭賀 張剛瑋 同學', content: ['獲國科會 大學生專題計畫'] }
        ]
    },
    {
        year: '2010',
        items: [
            { title: '恭賀 陳政宇 同學榮獲', content: ['2010 花蓮稅務杯全國圍棋公開賽初段第六名'] },
            { title: '恭賀 林金龍 同學', content: ['成績優異榮獲國立東華大學第99學年度第一學期 書卷獎'] }
        ]
    }
];

const Awards = () => {
    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-20 md:py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 sm:mb-12 md:mb-16 text-center text-foreground dark:text-white"
            >
                Awards & Honors
            </motion.h1>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent-purple/50 to-transparent transform md:-translate-x-1/2" />

                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                    {awards.map((yearGroup, i) => (
                        <motion.div
                            key={yearGroup.year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-stretch ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Card Side */}
                            <div className="flex-1 w-full pl-10 sm:pl-14 md:pl-0">
                                <div className="bg-card/40 dark:bg-white/5 backdrop-blur-md border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 h-full relative group shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-3 sm:p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Trophy size={40} className="text-foreground dark:text-white sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]" />
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6 border-b border-border/50 dark:border-white/10 pb-2 sm:pb-3 md:pb-4">
                                        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm sm:text-base md:text-lg font-mono font-bold">
                                            <Award size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                                            {yearGroup.year}
                                        </span>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                        {yearGroup.items.map((item, idx) => (
                                            <div key={idx}>
                                                <h3 className="font-bold text-sm sm:text-base md:text-lg text-foreground dark:text-white mb-1 sm:mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent-purple inline-block" />
                                                    {item.title}
                                                </h3>
                                                <ul className="space-y-1 sm:space-y-2 pl-3 sm:pl-4 border-l border-border/50 dark:border-white/10 ml-0.5">
                                                    {item.content.map((line, lineIdx) => (
                                                        <li key={lineIdx} className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                                            {line}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-background border-2 sm:border-4 border-accent-purple transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(147,114,255,0.5)] flex items-center justify-center">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-foreground dark:bg-white rounded-full opacity-50" />
                            </div>

                            {/* Empty Side */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;

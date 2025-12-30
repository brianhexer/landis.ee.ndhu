import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Quote } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import useMousePosition from '../hooks/useMousePosition';





const ElectricArcs = () => {
    // Generate random lightning paths
    const [arcs, setArcs] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Create 1-3 new arcs occasionally
            if (Math.random() > 0.7) {
                const newArc = {
                    id: Date.now(),
                    x: Math.random() * 100, // Start X %
                    y: Math.random() * 100, // Start Y %
                    points: Array.from({ length: 5 }, (_, i) => ({
                        dx: (Math.random() - 0.5) * 10, // Random jagged x offset
                        dy: (i + 1) * 10 + (Math.random() - 0.5) * 5 // Progress downwards/upwards
                    }))
                };
                setArcs(prev => [...prev, newArc]);

                // Cleanup old arcs
                setTimeout(() => {
                    setArcs(prev => prev.filter(a => a.id !== newArc.id));
                }, 200); // Short flash duration
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {arcs.map(arc => (
                <motion.path
                    key={arc.id}
                    d={`M ${arc.x}% ${arc.y}% ${arc.points.map(p => `l ${p.dx} ${p.dy}`).join(' ')}`}
                    stroke="cyan"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.2 }}
                    style={{ filter: "drop-shadow(0 0 5px cyan)" }}
                />
            ))}
        </svg>
    );
};



const Home = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [hideCursor, setHideCursor] = useState(false);
    const { x, y } = useMousePosition();

    const quotes = [
        { text: "In a time of drastic change it is the learners who inherit the future. The learned usually find themselves equipped to live in a world that no longer exists.", author: "Eric Hoffer" },
        { text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world...", author: "Albert Einstein" },
        { text: "Don't be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson" },
        { text: "Boys, be ambitious!", author: "Dr. William, S. Clark" },
        { text: "Just do it!", author: "Nike" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 pb-8 sm:pb-12 md:pb-16 relative min-h-screen bg-transparent transition-colors duration-300">
            {/* Cyberpunk AI Fixed Background - REPLACED BY GLOBAL BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Active Electric Arcs (Kept Local) */}
                <ElectricArcs />

                {/* Dynamic Cyber Orbs (Kept for Home flair) */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent-purple/10 blur-[120px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen"
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full mb-4 sm:mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent-purple animate-spin-slow" />
                        <span className="text-xs sm:text-sm text-accent-purple uppercase tracking-widest">Research Lab</span>
                    </motion.div>

                    <div className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 leading-none uppercase min-h-[100px] sm:min-h-[120px] md:min-h-[160px] lg:min-h-[200px] ${hideCursor ? '[&_.Typewriter__cursor]:opacity-0' : ''}`}>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                wrapperClassName: "text-foreground dark:text-white",
                                cursorClassName: "text-accent-purple"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('LANDIS')
                                    .callFunction(() => setHideCursor(true))
                                    .pauseFor(5000)
                                    .callFunction(() => setHideCursor(false))
                                    .deleteAll()
                                    .start();
                            }}
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="block text-accent-purple text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 font-light tracking-wide px-1 max-w-7xl mx-auto leading-snug sm:leading-relaxed"
                        >
                            Laboratory for Advanced Networks & <br /> Distributed Intelligent Systems
                        </motion.span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-4"
                    >
                        National Dong Hwa University (NDHU), Taiwan, R.O.C.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-3 sm:px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 relative z-20">

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">

                    {/* Welcome Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/40 dark:bg-white/5 backdrop-blur-xl border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-purple border-b border-border dark:border-gray-800 pb-3 sm:pb-4 mb-4 sm:mb-6">Welcome to LANDIS</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                                Welcome to the Laboratory for Advanced Networks and Distributed Intelligent Systems (LANDIS). We are pioneering research in:
                            </p>
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                                {['Network Science', 'Cloud Computing', 'Internet of Things', '5G/6G Networks'].map((item) => (
                                    <div key={item} className="bg-accent-purple/10 p-2 sm:p-3 md:p-4 rounded-lg text-center border border-accent-purple/20 text-foreground dark:text-white font-bold text-xs sm:text-sm md:text-base">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-foreground/90">Focus Areas:</h3>
                            <ul className="space-y-3">
                                {[
                                    'Advanced Network Technologies (WSN, IoT, 4G/5G, MANET/VANET)',
                                    'Distributed Systems (Ubiquitous Computing, Data Aggregation)',
                                    'Algorithm Design & Analysis (Distributed, Randomized, Optimization)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Announcements Section - Modern Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/40 dark:bg-white/5 backdrop-blur-xl border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-purple border-b border-border dark:border-gray-800 pb-3 sm:pb-4 mb-4 sm:mb-6 md:mb-8">Lab News</h2>
                        <div className="space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            <div className="group relative pl-8 pb-8 border-l-2 border-border dark:border-white/10 last:border-0 last:pb-0">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-purple border-2 border-background shadow-[0_0_8px_rgba(147,114,255,0.8)] group-hover:scale-125 transition-transform" />
                                <span className="text-sm text-accent-purple font-mono mb-2 block">November 21th, 2014</span>
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent-purple transition-colors">2015 Spring Information Theory Workshop</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    "2015 Spring Information Theory and Communications Workshop & MOST Results Presentation" at Farglory Hotel Hualien.
                                </p>
                                <a href="http://itcom2015s.ndhu.edu.tw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mt-3 hover:text-accent-purple transition-colors">
                                    View Event <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>

                            <div className="group relative pl-8 pb-8 border-l-2 border-border dark:border-white/10 last:border-0 last:pb-0">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-purple border-2 border-background shadow-[0_0_8px_rgba(147,114,255,0.8)] group-hover:scale-125 transition-transform" />
                                <span className="text-sm text-accent-purple font-mono mb-2 block">June 10th, 2014</span>
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent-purple transition-colors">Recruitment: I WANT YOU</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Recruiting students for "Internet of Things", "Wearable Devices", and "Connected Vehicles" projects.
                                </p>
                            </div>

                            <div className="group relative pl-8 pb-8 border-l-2 border-border dark:border-white/10 last:border-0 last:pb-0">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-purple border-2 border-background shadow-[0_0_8px_rgba(147,114,255,0.8)] group-hover:scale-125 transition-transform" />
                                <span className="text-sm text-accent-purple font-mono mb-2 block">September 26th, 2013</span>
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent-purple transition-colors">Big Data Systems Course</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Joint course featuring Prof. Shih-Wei Liao on Big Data systems core.
                                </p>
                            </div>

                            <div className="group relative pl-8 pb-8 border-l-2 border-border dark:border-white/10 last:border-0 last:pb-0">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent-purple border-2 border-background shadow-[0_0_8px_rgba(147,114,255,0.8)] group-hover:scale-125 transition-transform" />
                                <span className="text-sm text-accent-purple font-mono mb-2 block">July 7th, 2013</span>
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent-purple transition-colors">Industry-Academia Cooperation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Collaboration with Gemtek Technology on Smart Home environment tools.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {/* Rotating Quotes */}
                    <div className="bg-card/40 dark:bg-card border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote size={60} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold uppercase mb-4 sm:mb-6 text-accent-purple tracking-wider">Daily Inspiration</h3>

                        <div className="h-32 sm:h-36 md:h-40 relative">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={quoteIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic mb-3 sm:mb-4 font-light leading-relaxed">
                                        "{quotes[quoteIndex].text}"
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="h-[1px] w-8 bg-accent-purple" />
                                        <span className="text-accent-purple font-bold text-sm uppercase">{quotes[quoteIndex].author}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-2 mt-4 justify-center">
                            {quotes.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setQuoteIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === quoteIndex ? 'bg-accent-purple w-6' : 'bg-muted-foreground/20 hover:bg-muted-foreground/40'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Archives - Styled */}
                    <div className="bg-card/40 dark:bg-card border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                        <h3 className="text-base sm:text-lg font-bold uppercase mb-4 sm:mb-6 text-accent-purple tracking-wider">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            {['Recruitment: I WANT YOU', 'Big Data Systems', 'Industry Cooperation'].map((item) => (
                                <a key={item} href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple group-hover:scale-150 transition-transform" />
                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">{item}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact - Compact */}
                    <div className="bg-gradient-to-br from-accent-purple/20 to-transparent border border-accent-purple/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-[0_0_15px_rgba(147,114,255,0.15)] hover:shadow-[0_0_25px_rgba(147,114,255,0.3)] transition-all duration-500">
                        <h3 className="text-base sm:text-lg font-bold uppercase mb-4 sm:mb-6 text-foreground tracking-wider">Contact</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">📧</span>
                                <span className="select-all">jenyeu@gms.ndhu.edu.tw</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">📞</span>
                                <span>(03) 863-4080</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">📍</span>
                                <span>Engineering Building D207</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

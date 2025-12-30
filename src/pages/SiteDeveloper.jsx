import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Code2, Palette, Terminal, Cpu, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaDiscord, FaWhatsapp, FaXTwitter, FaLine, FaThreads } from 'react-icons/fa6';

const SocialButton = ({ icon, label, href, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={`relative group flex items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden ${color} shadow-lg hover:shadow-cyan-500/20`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="text-2xl filter drop-shadow-md">{icon}</span>
            <span className="text-xs font-medium tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">{label}</span>
        </div>
    </motion.a>
);

const TechItem = ({ label, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.1, rotate: [-1, 1, 0], transition: { duration: 0.2 } }}
        className="relative group cursor-default"
    >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
        <div className="relative px-6 py-3 bg-black rounded-full leading-none flex items-center">
            <span className="flex items-center space-x-5">
                <span className="text-gray-100 font-medium group-hover:text-cyan-300 transition-colors duration-200">{label}</span>
            </span>
        </div>
    </motion.div>
);

// 3D Tilt Card Component
const TiltCard = ({ children }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full"
        >
            {children}
        </motion.div>
    );
};

const SiteDeveloper = () => {
    const socials = [
        { label: 'Instagram', href: 'https://instagram.com/brianhexer', icon: <FaInstagram size={24} />, color: 'hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-orange-500/20 hover:text-pink-500' },
        { label: 'Instagram', href: 'https://instagram.com/brian_offl', icon: <FaInstagram size={24} />, color: 'hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-orange-500/20 hover:text-pink-500' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/brianhexer', icon: <FaLinkedin size={24} />, color: 'hover:bg-blue-600/20 hover:text-blue-500' },
        { label: 'Threads', href: 'https://threads.net/@brianhexer', icon: <FaThreads size={24} />, color: 'hover:bg-white/10 hover:text-white' },
        { label: 'Threads', href: 'https://threads.net/@brian_offl', icon: <FaThreads size={24} />, color: 'hover:bg-white/10 hover:text-white' },
        { label: 'Facebook', href: 'https://facebook.com/brianhexer', icon: <FaFacebook size={24} />, color: 'hover:bg-blue-600/20 hover:text-blue-500' },
        { label: 'YouTube', href: 'https://youtube.com/@brianhexer', icon: <FaYoutube size={24} />, color: 'hover:bg-red-600/20 hover:text-red-500' },
        { label: 'Discord', href: 'https://discord.com/invite/brianhexer', icon: <FaDiscord size={24} />, color: 'hover:bg-indigo-600/20 hover:text-indigo-400' },
        { label: 'WhatsApp', href: 'https://wa.me/916382517017', icon: <FaWhatsapp size={24} />, color: 'hover:bg-green-600/20 hover:text-green-500' },
        { label: 'X (Twitter)', href: 'https://x.com/brianhexer', icon: <FaXTwitter size={24} />, color: 'hover:bg-white/10 hover:text-white' },
        { label: 'Line', href: 'https://line.me/ti/p/F3nwf-j9vs', icon: <FaLine size={24} />, color: 'hover:bg-green-500/20 hover:text-green-400' },
        { label: 'GitHub', href: 'https://github.com/brianhexer', icon: <Github size={24} />, color: 'hover:bg-gray-800/50 hover:text-white' },
    ];

    const techStack = ['React', 'Vite', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Firebase', 'PostgreSQL', 'Python', 'UI/UX Design'];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Hero Card */}
                <TiltCard>
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="p-1 rounded-[30px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent mb-16 shadow-2xl shadow-cyan-900/20"
                    >
                        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[28px] p-8 md:p-14 overflow-hidden relative group">
                            {/* Shine Effect */}
                            <div className="absolute top-0 right-0 w-[200%] h-full bg-gradient-to-l from-transparent via-white/5 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 transform transition-transform" style={{ transformStyle: "preserve-3d" }}>
                                {/* Avatar / Visual */}
                                <motion.div
                                    style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-white/10 flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-transparent group-hover:ring-cyan-500/30 transition-all duration-500">
                                        <img src="/brian.jpg" alt="Brian Hexer" className="w-full h-full object-cover" />
                                    </div>

                                </motion.div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left" style={{ transform: "translateZ(30px)" }}>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-2"
                                    >
                                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">The Creator</h2>
                                        </div>

                                        <div className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white h-[80px] md:h-[96px] flex items-center justify-center md:justify-start">
                                            <Typewriter
                                                options={{
                                                    strings: ['Brian Hexer', 'Deepan P', '李忠碩', 'Lǐ Zhōng Shuò'],
                                                    autoStart: true,
                                                    loop: true,
                                                    delay: 75,
                                                    deleteSpeed: 50,
                                                    pauseFor: 2500,
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    <div className="text-xl md:text-2xl font-medium text-muted-foreground h-12 mb-6 flex items-center justify-center md:justify-start gap-2">
                                        <span className="text-purple-400 text-2xl">_ ></span>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    'Full Stack Developer',
                                                    'UI/UX Enthusiast',
                                                    'Creative Technologist',
                                                    'Digital Craftsman'
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 50,
                                                deleteSpeed: 30,
                                            }}
                                        />
                                    </div>

                                    <p className="text-foreground/80 leading-relaxed max-w-lg mx-auto md:mx-0 text-lg font-light">
                                        Crafting <span className="text-cyan-400 font-medium">immersive</span> digital experiences where design meets functionality. Passionate about building the <span className="text-purple-400 font-medium">web of tomorrow</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </TiltCard>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-20 text-center"
                >
                    <h3 className="text-3xl font-bold mb-10 flex items-center justify-center gap-3">
                        <Terminal className="w-8 h-8 text-cyan-400" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Technologies & Tools</span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto perspective-1000">
                        {techStack.map((tech, index) => (
                            <TechItem key={index} label={tech} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Connect Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
                        <Globe className="w-8 h-8 text-purple-500" />
                        <span>Connect Everywhere</span>
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                        {socials.map((social, index) => (
                            <SocialButton key={index} {...social} />
                        ))}
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center pb-10"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent w-48 mb-6" />
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        Designed & Built with <span className="text-red-500 animate-bounce inline-block">❤</span> by Brian Hexer
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SiteDeveloper;

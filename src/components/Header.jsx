import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Advisor', path: '/advisor' },
    { name: 'Researches', path: '/researches' },
    { name: 'Members', path: '/members' },
    { name: 'Publications', path: '/publications' },
    { name: 'Courses', path: '/courses' },
    { name: 'Awards', path: '/awards' }, // Shortened for design
];

import ThemeToggle from './ThemeToggle';

import logo from '@/assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [atBottom, setAtBottom] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Revert to logo when near bottom (where footer parallax happens)
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
            setAtBottom(isBottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-[10000] transition-all duration-300',
                    scrolled
                        ? 'bg-[#0a0b0d]/95 backdrop-blur-md py-1.5 md:py-2 border-b border-[#ffffff1f] shadow-lg'
                        : 'bg-transparent backdrop-blur-none py-2 md:py-3'
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link to="/" className="z-50 block">
                        <AnimatePresence mode="wait">
                            {!scrolled || atBottom ? (
                                <motion.img
                                    key="logo-img"
                                    src={logo}
                                    alt="LANDIS Logo"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-12 md:h-14 w-auto object-contain"
                                    style={{ filter: "drop-shadow(0 0 2px #9372FF) drop-shadow(0 0 5px rgba(147,114,255,0.5))" }}
                                />
                            ) : (
                                <motion.span
                                    key="logo-text"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl md:text-3xl font-black tracking-tighter text-foreground block"
                                >
                                    LANDIS
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={cn(
                                    'text-sm font-medium uppercase tracking-widest hover:text-accent-purple transition-colors relative group',
                                    location.pathname === item.path ? 'text-accent-purple' : 'text-foreground/80'
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full",
                                    location.pathname === item.path ? "w-full" : ""
                                )} />
                            </Link>
                        ))}
                        <div className="pl-4 border-l border-border/50">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Actions */}
                    <div className="lg:hidden flex items-center gap-3 z-[10000] relative">
                        <ThemeToggle />
                        <button
                            className="text-foreground p-2 hover:text-accent-purple transition-colors touch-manipulation active:scale-95 relative z-[10001]"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: 'tween', duration: 0.3 }}
                                className="fixed inset-0 h-screen w-screen bg-[#0a0b0d] flex flex-col items-center justify-center gap-8 lg:hidden z-[9999] overflow-y-auto"
                                style={{ touchAction: 'none' }}
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={cn(
                                                "text-xl md:text-2xl font-bold uppercase tracking-widest transition-colors",
                                                location.pathname === item.path
                                                    ? "text-accent-purple"
                                                    : "text-foreground hover:text-accent-purple"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        </>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            ref={(node) => {
                if (node) {
                    document.documentElement.style.setProperty('--footer-height', `${node.offsetHeight}px`);
                }
            }}
            className="relative w-full z-50 bg-background/80 backdrop-blur-md border-t border-border dark:border-white/10 pt-20 pb-10 overflow-hidden"
        >


            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    {/* Brand / Info */}
                    <div className="max-w-md">
                        <h3 className="text-2xl font-black mb-6 text-foreground">LANDIS</h3>
                        <p className="text-muted-foreground mb-2">
                            Laboratory for Advanced Networks and Distributed Intelligent Systems
                        </p>
                        <p className="text-muted-foreground">
                            National Dong Hwa University (NDHU), Taiwan, R.O.C.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Resources</h4>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</Link></li>
                                <li><Link to="/publications" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Publications</Link></li>
                                <li><Link to="/researches" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Researches</Link></li>
                                <li><Link to="/courses" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Courses</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Connect</h4>
                            <ul className="space-y-3">
                                <li><Link to="/members" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Members</Link></li>
                                <li><Link to="/advisor" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Advisor</Link></li>
                                <li><a href="mailto:jenyeu@gms.ndhu.edu.tw" className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-border dark:border-white/10 gap-6">
                    <div className="flex items-center gap-6">
                        {/* Socials */}
                        <a href="mailto:jenyeu@gms.ndhu.edu.tw" className="p-2 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors text-foreground">
                            <Mail className="w-5 h-5" />
                        </a>
                        <span className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} LANDIS
                        </span>
                        <div className="w-px h-4 bg-border dark:bg-white/10 mx-2" />
                        <Link to="/site-developer" className="text-xs font-medium px-4 py-1.5 rounded-md border border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] active:scale-95 transition-all duration-300">
                            Site Developer
                        </Link>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                    >
                        Back to top
                        <div className="p-2 bg-foreground/5 rounded-full group-hover:bg-cyan-600/10 dark:group-hover:bg-cyan-400/10 transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

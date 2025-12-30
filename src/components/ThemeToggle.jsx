import React from 'react';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { motion } from "framer-motion"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-16 rounded-full bg-accent-purple/10 hover:bg-accent-purple/20 transition-colors relative overflow-hidden flex flex-col items-center backdrop-blur-sm border border-white/5"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-2 text-accent-purple"
            >
                <Moon size={18} />
            </motion.div>

            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0, scale: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-2 text-white"
            >
                <Sun size={18} />
            </motion.div>
        </button>
    );
};

export default ThemeToggle;

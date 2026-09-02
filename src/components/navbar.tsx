import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const stored = localStorage.getItem("darkMode");
        return stored ? JSON.parse(stored) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
            <span className="text-slate-900 dark:text-slate-100 text-xl font-bold">aplify</span>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
            >
                {isDarkMode ? "☀️" : "🌙"}
            </button>
        </nav>
    );
}

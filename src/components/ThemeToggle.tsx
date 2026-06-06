import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-colors focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle visual theme"
    >
      <motion.div
        id="theme-icon-container"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-amber-500 fill-amber-500/20" />
        ) : (
          <Moon className="h-5 w-5 text-zinc-700 fill-zinc-700/10" />
        )}
      </motion.div>
    </motion.button>
  );
}

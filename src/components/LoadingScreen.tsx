import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame } from 'lucide-react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-red-600/10 blur-[100px]" />
            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              id="loader-logo-wrap"
              className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 shadow-2xl p-0.5"
              initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                rotate: [-15, 10, 0],
                opacity: 1,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-zinc-950">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  <Flame className="h-12 w-12 text-red-500 fill-amber-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Restaurant Name Header */}
            <motion.h1
              id="loader-title-p1"
              className="mt-6 text-center font-sans text-3xl font-bold tracking-wider uppercase bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Spicy
            </motion.h1>

            <motion.h2
              id="loader-title-telugu"
              className="mt-1 text-center font-sans text-lg font-medium text-amber-500/80"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              స్పైసి ఫ్యామిలీ రెస్టారెంట్
            </motion.h2>

            {/* Custom Progress Bar */}
            <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                id="loader-progress-bar"
                className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-amber-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              id="loader-status"
              className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              Warming up traditional clay ovens...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

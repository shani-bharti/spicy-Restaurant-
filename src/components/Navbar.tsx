import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Flame, CalendarDays, PhoneCall } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ isDark, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Features', id: 'features' },
    { label: 'Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md shadow-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="navbar-logo-trigger"
              onClick={() => scrollTo('home')}
              className="flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-amber-500 text-white shadow-lg">
                <Flame className="h-5 w-5 fill-amber-500/20" />
              </div>
              <div>
                <h1 className="font-sans text-lg font-extrabold tracking-tight text-zinc-900 dark:text-amber-500">
                  SPICY
                </h1>
                <p className="font-sans text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 -mt-1 uppercase tracking-wider">
                  స్పైసి ఫ్యామిలీ
                </p>
              </div>
            </button>

            {/* Desktop Navigation Link Cluster */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-red-600 dark:text-amber-400 font-semibold bg-red-500/5 dark:bg-amber-400/5'
                      : 'text-zinc-700 hover:text-red-600 dark:text-zinc-300 dark:hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme toggler */}
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

              {/* Call support */}
              <a
                href="tel:+919177235000"
                className="flex items-center space-x-1 px-3 py-2 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-red-500 rounded-lg"
              >
                <PhoneCall className="h-4 w-4 text-red-500" />
                <span>+91 91772</span>
              </a>

              {/* Dynamic Action Call */}
              <motion.button
                id="reserve-table-nav-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('reserve')}
                className="flex items-center space-x-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-red-500 hover:to-amber-400 transition-all border border-orange-500/10 cursor-pointer"
              >
                <CalendarDays className="h-4 w-4" />
                <span>Reserve Table</span>
              </motion.button>
            </div>

            {/* Mobile Bar Controls */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

              <button
                id="mobile-drawer-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                aria-label="Toggle navigation drawer"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            className="fixed inset-y-0 right-0 z-30 w-full max-w-xs bg-white/95 dark:bg-zinc-950/98 backdrop-blur-lg shadow-2xl border-l border-zinc-200 dark:border-zinc-900 p-6 md:hidden flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mt-16">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    id={`nav-mobile-link-${item.id}`}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between text-left p-3 rounded-xl transition-all ${
                      activeSection === item.id
                        ? 'bg-red-500/5 dark:bg-amber-400/5 text-red-600 dark:text-amber-400 font-bold border-l-4 border-red-500 dark:border-amber-400'
                        : 'text-zinc-800 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <span className="text-base font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <a
                href="tel:+919177235000"
                className="flex items-center space-x-3 w-full p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-all font-mono text-sm"
              >
                <PhoneCall className="h-4 w-4 text-red-500" />
                <span>+91 91772 35000</span>
              </a>

              <button
                id="reserve-table-mobile-action"
                onClick={() => scrollTo('reserve')}
                className="flex items-center justify-center space-x-2 w-full rounded-xl bg-gradient-to-r from-red-600 to-amber-500 py-3.5 text-base font-bold text-white shadow-lg transition-all"
              >
                <CalendarDays className="h-5 w-5" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import About from './components/About';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('spicy_theme');
      return saved ? saved === 'dark' : true; // Dark mode by default for luxury feel
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      const root = window.document.documentElement;
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('spicy_theme', isDark ? 'dark' : 'light');
    } catch (e) {
      console.warn("Theme persistence locked in iframe context", e);
    }
  }, [isDark]);

  // ScrollSpy Listener to Highlight Nav Links
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'features', 'menu', 'gallery', 'reviews', 'contact'];
      const scrollYOffset = window.scrollY + 160; // Offset matching the glass header

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollYOffset >= top && scrollYOffset < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleScrollToSegment = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 85; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPos = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      {/* 2.2 Sec Luxury loading mask */}
      <LoadingScreen />

      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
        {/* Navigation bar */}
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        {/* Hero Area */}
        <Hero
          onReserveClick={() => handleScrollToSegment('reserve')}
          onOrderClick={() => handleScrollToSegment('menu')}
        />

        {/* Story Section */}
        <About />

        {/* Features Row */}
        <Features />

        {/* Interactive Food Menu */}
        <Menu />

        {/* Aesthetic Showcase Portfolio */}
        <Gallery />

        {/* Interactive Reviews Hub */}
        <Reviews />

        {/* Digital Table booking Desk */}
        <ReservationForm />

        {/* Map view & Contact Desk */}
        <Contact />

        {/* Premium footer with scroll to top */}
        <Footer />

        {/* Pulse messaging floats */}
        <FloatingWhatsApp />
      </div>
    </>
  );
}

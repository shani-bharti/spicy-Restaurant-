import { Flame, Facebook, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const handleQuickScroll = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 80;
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
    <footer id="footer" className="bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-900 pt-16 pb-8 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-zinc-900 pb-12">
          {/* Col 1: About the Brand and Telugu line */}
          <div className="md:col-span-4">
            <button
              id="footer-logo-btn"
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-left mb-4 focus:outline-none"
            >
              <div className="h-10 w-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-xl flex items-center justify-center text-white">
                <Flame className="h-5 w-5 fill-amber-500/20" />
              </div>
              <div>
                <h3 className="text-white text-lg font-black tracking-tight">SPICY</h3>
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider -mt-1">
                  స్పైసి ఫ్యామిలీ రెస్టారెంట్
                </p>
              </div>
            </button>
            <p className="text-xs leading-relaxed max-w-xs text-zinc-450">
              The premium culinary hub on Mumbai Highway, Muthangi, Hyderabad. Championing authentic Hyderabadi Dum slow-cooked spices, tandoors, and hospitable family dine-in sections since years.
            </p>
            {/* Social handles */}
            <div className="flex items-center space-x-3.5 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-zinc-900 hover:bg-zinc-855 text-zinc-350 hover:text-white rounded-xl flex items-center justify-center transition-all border border-zinc-850"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-zinc-900 hover:bg-zinc-855 text-zinc-350 hover:text-white rounded-xl flex items-center justify-center transition-all border border-zinc-850"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-zinc-900 hover:bg-zinc-855 text-zinc-350 hover:text-white rounded-xl flex items-center justify-center transition-all border border-zinc-850"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Shortcuts */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Quick Highlights
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-zinc-400">
              <button
                id="footer-link-about"
                onClick={() => handleQuickScroll('about')}
                className="text-left hover:text-amber-550 hover:underline cursor-pointer"
              >
                Our Legacy Story
              </button>
              <button
                id="footer-link-features"
                onClick={() => handleQuickScroll('features')}
                className="text-left hover:text-amber-550 hover:underline cursor-pointer"
              >
                Amenities & Services
              </button>
              <button
                id="footer-link-menu"
                onClick={() => handleQuickScroll('menu')}
                className="text-left hover:text-amber-550 hover:underline cursor-pointer"
              >
                Culinary Menu
              </button>
              <button
                id="footer-link-gallery"
                onClick={() => handleQuickScroll('gallery')}
                className="text-left hover:text-amber-550 hover:underline cursor-pointer"
              >
                Ambience Gallery
              </button>
              <button
                id="footer-link-reviews"
                onClick={() => handleQuickScroll('reviews')}
                className="text-left hover:text-amber-550 hover:underline cursor-pointer"
              >
                Ratings & Testimonials
              </button>
            </div>
          </div>

          {/* Col 3: Operating schedule / Timings */}
          <div className="md:col-span-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Our Hub Contacts
            </h4>
            <div className="space-y-3.5 text-xs">
              <p className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  G6VF+6CR, Mumbai Highway, Muthangi, Hyderabad, Telangana 502300, India
                </span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-amber-550 text-amber-500" />
                <span className="font-mono text-zinc-300 font-bold">+91 91772 35000</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-pink-500" />
                <span>contact@spicymuthangi.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Lower layout footer values */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-[11px] text-zinc-500 font-mono">
          <p>© {currentYear} Spicy Family Restaurant. All Hyderabadi Gastronomy Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:underline hover:text-zinc-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline hover:text-zinc-400">
              Catering T&C
            </a>
          </div>
        </div>
      </div>

      {/* Floating back to top controls */}
      {showTopBtn && (
        <button
          id="scroll-to-top-floating-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-11 w-11 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white shadow-xl flex items-center justify-center border border-zinc-800 cursor-pointer transition-all z-20 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="h-5 w-5 text-amber-500" />
        </button>
      )}
    </footer>
  );
}

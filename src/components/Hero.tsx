import { motion } from 'motion/react';
import { ChevronDown, Calendar, Utensils, Star, Flame } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onOrderClick: () => void;
}

export default function Hero({ onReserveClick, onOrderClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 bg-zinc-950 text-white"
    >
      {/* Background Ambient Glow & Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mt-4 lg:mt-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Text Block */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Localized Tagline */}
            <motion.div
              id="hero-tag-telugu"
              className="inline-flex items-center space-x-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-xs font-semibold text-red-500 dark:text-amber-400 mb-6 uppercase tracking-wider"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Flame className="h-3.5 w-3.5 fill-red-500/20" />
              <span>స్పైసి ఫ్యామిలీ రెస్టారెంట్</span>
              <span className="h-1 w-1 rounded-full bg-amber-500" />
              <span>Hyderabad Special</span>
            </motion.div>

            {/* Captivating Heading */}
            <motion.h1
              id="hero-heading"
              className="font-sans text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Experience the True{' '}
              <span className="block lg:inline bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Taste of Hyderabad
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              id="hero-subtext"
              className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Authentic Biryani, Tandoori Specials & Family Dining Since Years. Indulge in
              the heritage of Slow-Dum Indian delicacies crafted painstakingly with fresh ground spices.
            </motion.p>

            {/* Dynamic CTAs */}
            <motion.div
              id="hero-actions"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                id="hero-reserve-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onReserveClick}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                <span>Reserve a Table</span>
              </motion.button>

              <motion.button
                id="hero-order-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOrderClick}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-2xl bg-zinc-900 border border-zinc-800 px-8 py-4 text-base font-bold text-zinc-100 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
              >
                <Utensils className="h-5 w-5 text-amber-500" />
                <span>Order Online</span>
              </motion.button>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div
              id="hero-metrics"
              className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.0 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?auto=format&fit=crop&q=80&w=60`}
                      alt={`Happy Client ${i}`}
                      className="h-8 w-8 rounded-full border border-zinc-950 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-amber-500" />
                    ))}
                    <span className="ml-1 text-sm font-bold text-white">4.1</span>
                  </div>
                  <span className="text-xs text-zinc-400">3,276+ Verified Reviews</span>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              <div className="text-left">
                <p className="text-sm font-bold text-zinc-100">Mumbai Highway</p>
                <p className="text-xs text-zinc-400">Muthangi, Hyderabad</p>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Food Presentation */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <motion.div
              id="hero-media-wrap"
              className="relative w-full max-w-[420px] aspect-square rounded-full border border-emerald-500/10 p-4 bg-gradient-to-tr from-white/5 to-white/0"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, type: 'spring' }}
            >
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/20 animate-[spin_80s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-red-500/10 animate-[spin_120s_linear_infinite]" />

              {/* Main Circular Food Image */}
              <div className="relative h-full w-full rounded-full overflow-hidden border-[4px] border-zinc-900 shadow-2xl">
                <img
                  src="/src/assets/images/spicy_biryani_1780729750320.png"
                  alt="Authentic Hyderabadi Dum Biryani"
                  className="h-full w-full object-cover float-animation"
                  referrerPolicy="no-referrer"
                />
                {/* Visual mask shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Mini Food Card 1 */}
              <motion.div
                id="floating-card-sig"
                className="absolute -top-3 -right-3 sm:-right-6 flex items-center space-x-2.5 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800 p-2.5 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <div className="h-10 w-10 overflow-hidden rounded-xl bg-orange-500">
                  <img
                    src="/src/assets/images/tandoori_platter_1780729786173.png"
                    alt="Tandoori Tikka"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                    Must Try Signature
                  </p>
                  <p className="text-xs font-bold text-white">Tandoor Platter</p>
                </div>
              </motion.div>

              {/* Floating Mini Experience Card 2 */}
              <motion.div
                id="floating-card-family"
                className="absolute -bottom-3 -left-3 sm:-left-6 flex items-center space-x-2.5 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800 p-2.5 shadow-2xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="h-10 w-10 overflow-hidden rounded-xl bg-orange-500">
                  <img
                    src="/src/assets/images/family_dining_1780729766217.png"
                    alt="Family Dining Setup"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    Spacious & Cozy
                  </p>
                  <p className="text-xs font-bold text-white">Family Sections</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down mouse indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
            Explore Flavors
          </span>
          <motion.div
            id="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex h-8 w-5 justify-center rounded-full border border-zinc-700 p-1"
          >
            <div className="h-2 w-1.5 rounded-full bg-amber-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

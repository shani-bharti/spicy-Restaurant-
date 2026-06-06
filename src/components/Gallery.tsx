import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Showcase', value: 'all' },
    { label: 'Delectable Food', value: 'food' },
    { label: 'Interior Design', value: 'interior' },
    { label: 'Ambiance', value: 'ambiance' },
    { label: 'House Specials', value: 'signature' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const openLightbox = (url: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.url === url);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null ? 0 : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length));
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/20 transition-colors relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 h-[300px] w-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-on-scroll">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-600 dark:text-amber-500">
            Aesthetic Vibe
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Spicy Ambience & Kitchen Moments
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Gallery Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-cat-${cat.value}`}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-zinc-900 text-white dark:bg-amber-550 dark:bg-gradient-to-r dark:from-red-600 dark:to-amber-500 dark:text-white shadow-sm'
                  : 'bg-white text-zinc-650 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div
          id="gallery-masonry"
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
          layout
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="break-inside-avoid relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850 p-2 shadow-sm group cursor-pointer"
              whileHover={{ y: -4 }}
              onClick={() => openLightbox(item.url)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Photo component */}
              <div className="relative overflow-hidden rounded-2xl aspect-auto max-h-[420px] bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Glassmorphic hover overlay */}
                <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4" />

                {/* Floating overlay actions shown on card hover */}
                <span className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-350 hover:scale-110">
                  <Maximize2 className="h-4 w-4 text-white" />
                </span>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-xl p-3.5">
                    <p className="text-xs font-bold text-white leading-snug flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400/20" />
                      <span>{item.caption}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="gallery-lightbox-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Upper controls */}
            <div className="absolute top-6 right-6 flex items-center space-x-3 z-10">
              <span className="font-mono text-xs text-zinc-400">
                {lightboxIndex + 1} / {GALLY_SIZE()}
              </span>
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Carousel navigation */}
            <button
              id="lightbox-prev-btn"
              onClick={prevImage}
              className="absolute left-6 h-12 w-12 hidden sm:flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition-all cursor-pointer z-10 border border-white/5"
              aria-label="Previous illustration"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              id="lightbox-next-btn"
              onClick={nextImage}
              className="absolute right-6 h-12 w-12 hidden sm:flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 transition-all cursor-pointer z-10 border border-white/5"
              aria-label="Next illustration"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Focused Image Container */}
            <motion.div
              id="lightbox-main-card"
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center select-none"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].url}
                alt={GALLERY_ITEMS[lightboxIndex].caption}
                className="max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-full text-center max-w-xl">
                <p className="text-sm font-semibold text-zinc-100">
                  {GALLERY_ITEMS[lightboxIndex].caption}
                </p>
                <span className="inline-block mt-2 font-mono text-[9px] uppercase tracking-widest bg-amber-500/15 text-amber-500 px-2.5 py-0.5 rounded-md">
                  {GALLERY_ITEMS[lightboxIndex].category} collection
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );

  function GALLY_SIZE() {
    return GALLERY_ITEMS.length;
  }
}

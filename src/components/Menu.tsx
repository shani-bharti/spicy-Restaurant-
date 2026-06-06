import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Sparkles, MessageSquare, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showVegOnly, setShowVegOnly] = useState<boolean>(false);
  const [tray, setTray] = useState<{ [id: string]: number }>({});

  const categories = [
    { label: 'All Dishes', value: 'all' },
    { label: 'Starters', value: 'starters' },
    { label: 'Biryani Specials', value: 'biryani' },
    { label: 'Main Course', value: 'main-course' },
    { label: 'Tandoori Breads', value: 'rotis' },
    { label: 'Desserts', value: 'desserts' },
  ];

  // Filtering Logic
  const filteredDishes = MENU_ITEMS.filter((dish) => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dish.teluguName && dish.teluguName.includes(searchQuery));
    const matchesVeg = !showVegOnly || dish.isVeg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  const updateTrayQty = (id: string, delta: number) => {
    setTray((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;
      if (newQty <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const clearTray = () => setTray({});

  const isTrayEmpty = Object.keys(tray).length === 0;

  const trayTotal = (Object.entries(tray) as [string, number][]).reduce<number>((accum, [id, qty]) => {
    const dish = MENU_ITEMS.find((d) => d.id === id);
    return accum + (dish ? dish.price * qty : 0);
  }, 0);

  // Generate WhatsApp Order Link
  const getWhatsAppLink = () => {
    const dishStrings = (Object.entries(tray) as [string, number][]).map(([id, qty]) => {
      const dish = MENU_ITEMS.find((d) => d.id === id);
      return `• ${qty}x ${dish?.name || ''} (₹${(dish?.price || 0) * qty})`;
    });

    const msg = encodeURIComponent(
      `*Spicy Family Restaurant - Menu Ordering Inquiry*\n\n` +
        `Hello Spicy, I would like to inquire/pre-order the following items from the website:\n\n` +
        `${dishStrings.join('\n')}\n\n` +
        `*Total Approximate Cost:* ₹${trayTotal}\n\n` +
        `Please confirm availability, thank you!`
    );

    return `https://wa.me/919177235000?text=${msg}`;
  };

  return (
    <section id="menu" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-600 dark:text-amber-500">
            Royal Flavors
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Discover Our Rich Food Menu
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10 border-b border-zinc-100 dark:border-zinc-900 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`menu-cat-${cat.value}`}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-2xl transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-br from-red-600 to-amber-500 text-white shadow-md'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-850'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto max-w-md lg:max-w-none">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search dish name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:border-amber-400 dark:focus:ring-amber-400"
              />
            </div>

            {/* Toggle switch for Veg Only */}
            <button
              id="menu-veg-toggle"
              onClick={() => setShowVegOnly(!showVegOnly)}
              className={`flex items-center space-x-2.5 rounded-2xl border px-4 py-2.5 text-xs font-bold transition-all w-full sm:w-auto justify-center cursor-pointer ${
                showVegOnly
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'
              }`}
            >
              <div
                className={`h-4.5 w-4.5 rounded-[4px] border-2 flex items-center justify-center transition-all ${
                  showVegOnly ? 'border-emerald-500 bg-emerald-500' : 'border-zinc-400'
                }`}
              >
                {showVegOnly && <div className="h-2 w-2 rounded-[2px] bg-white animate-scale-in" />}
              </div>
              <span>PURE VEG ONCE</span>
            </button>
          </div>
        </div>

        {/* Results layout split: Food Grid vs Sidebar Tray */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Food Card Grid */}
          <div className="lg:col-span-8">
            {filteredDishes.length === 0 ? (
              <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
                <p className="text-sm font-semibold text-zinc-500">
                  No matching scrumptious dishes found. Try a different search name!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredDishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    id={`menu-item-card-${dish.id}`}
                    layout
                    className="relative flex flex-col rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-850 p-4 transition-all duration-300 group hover:shadow-lg hover:border-orange-500/10 dark:hover:border-amber-500/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Food Thumbnail Wrap */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-200 dark:bg-zinc-900">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Floating badging */}
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-wider rounded-xl shadow-md border ${
                          dish.isVeg
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : 'bg-red-600 border-red-500 text-white'
                        }`}
                      >
                        {dish.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>

                      {dish.isPopular && (
                        <span className="absolute top-3 right-3 flex items-center space-x-1 bg-amber-500 text-zinc-950 px-2.5 py-1 text-[10px] font-bold rounded-xl shadow-md uppercase tracking-wider">
                          <Sparkles className="h-3 w-3 fill-zinc-950" />
                          <span>CHEF SPECIAL</span>
                        </span>
                      )}

                      {/* Bottom price float */}
                      <span className="absolute bottom-3 right-3 font-mono text-base font-extrabold text-white bg-zinc-950/80 px-3 py-1 rounded-xl backdrop-blur-sm border border-white/10">
                        ₹{dish.price}
                      </span>
                    </div>

                    {/* Metadata Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Telugu line and major name */}
                        <div className="mb-1.5 flex items-start justify-between">
                          <h3 className="font-sans text-lg font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">
                            {dish.name}
                          </h3>
                        </div>

                        {dish.teluguName && (
                          <p className="font-sans text-xs font-semibold text-orange-600/90 dark:text-amber-500/80 mb-2">
                            {dish.teluguName}
                          </p>
                        )}

                        <p className="font-sans text-xs text-zinc-500 dark:text-zinc-405 leading-relaxed mb-4 line-clamp-2">
                          {dish.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-850">
                        {/* Spice indicator */}
                        <div className="flex items-center space-x-1">
                          {dish.spicyLevel > 0 ? (
                            <>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mr-1">
                                Spice:
                              </span>
                              {Array.from({ length: dish.spicyLevel }).map((_, i) => (
                                <Flame
                                  key={i}
                                  className="h-3.5 w-3.5 text-red-500 fill-red-500/20"
                                />
                              ))}
                            </>
                          ) : (
                            <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-lg font-bold uppercase tracking-wider">
                              MILD FLAVOR
                            </span>
                          )}
                        </div>

                        {/* Interactive Tray Controls */}
                        <div>
                          {tray[dish.id] ? (
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-xl p-1 shadow-md">
                              <button
                                id={`tray-sub-btn-${dish.id}`}
                                onClick={() => updateTrayQty(dish.id, -1)}
                                className="p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="font-mono text-xs font-bold px-1 min-w-[14px] text-center">
                                {tray[dish.id]}
                              </span>
                              <button
                                id={`tray-add-btn-${dish.id}`}
                                onClick={() => updateTrayQty(dish.id, 1)}
                                className="p-1.5 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <motion.button
                              id={`tray-add-initial-btn-${dish.id}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateTrayQty(dish.id, 1)}
                              className="flex items-center space-x-1 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-850 px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                              <span>Add</span>
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Table tray selection sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-905 border border-zinc-100 dark:border-zinc-850 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-150 dark:border-zinc-850 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5 text-red-500" />
                  <h3 className="font-sans text-lg font-bold text-zinc-900 dark:text-white">
                    Your Order Inquiry
                  </h3>
                </div>
                {!isTrayEmpty && (
                  <button
                    id="tray-clear-all"
                    onClick={clearTray}
                    className="text-zinc-400 hover:text-red-500 transition-colors p-1 rounded-lg cursor-pointer"
                    title="Clear Tray"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {isTrayEmpty ? (
                <div className="text-center py-12 text-zinc-400 dark:text-zinc-500">
                  <p className="text-xs font-semibold mb-2">Your inquiry tray is empty</p>
                  <p className="text-[10px] leading-relaxed max-w-[200px] mx-auto">
                    Add standard chef specialities from our menu, calculate prices, and send a direct inquiry to WhatsApp.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Selected Item Rows */}
                  <div className="max-h-60 overflow-y-auto space-y-3 pr-1 divide-y divide-zinc-100 dark:divide-zinc-850">
                    {(Object.entries(tray) as [string, number][]).map(([id, qty]) => {
                      const dish = MENU_ITEMS.find((d) => d.id === id);
                      if (!dish) return null;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between pt-3 first:pt-0"
                        >
                          <div className="max-w-[150px]">
                            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                              {dish.name}
                            </p>
                            <p className="font-mono text-[10px] text-zinc-400 -mt-0.5">
                              {qty} x ₹{dish.price}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2.5">
                            <span className="font-mono text-sm font-extrabold text-zinc-900 dark:text-white">
                              ₹{dish.price * qty}
                            </span>
                            <div className="flex items-center bg-zinc-200/60 dark:bg-zinc-800 rounded-lg p-0.5">
                              <button
                                id={`tray-row-sub-${id}`}
                                onClick={() => updateTrayQty(id, -1)}
                                className="p-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded text-zinc-600 dark:text-zinc-305 cursor-pointer"
                              >
                                <Minus className="h-2.5 w-2.5" />
                              </button>
                              <button
                                id={`tray-row-add-${id}`}
                                onClick={() => updateTrayQty(id, 1)}
                                className="p-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded text-zinc-600 dark:text-zinc-305 cursor-pointer"
                              >
                                <Plus className="h-2.5 w-2.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary Totals */}
                  <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        Inquiry Total Cost:
                      </span>
                      <span className="font-mono text-xl font-black text-red-600 dark:text-amber-400">
                        ₹{trayTotal}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full rounded-2xl bg-emerald-600 text-white font-bold py-3.5 hover:bg-emerald-500 transition-all text-sm shadow-md"
                    >
                      <MessageSquare className="h-4.5 w-4.5 fill-white/10" />
                      <span>Send Enquiry to WhatsApp</span>
                    </a>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500 text-center mt-2.5 leading-relaxed">
                      *Pre-order inquiry calculated at website pricing. Final taxes and highway surcharges may apply at the physical cash counter.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

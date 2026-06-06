import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, PlusCircle, CheckCircle, Sparkles } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data';
import { ReviewItem } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(CUSTOMER_REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: ReviewItem = {
      id: `live-rev-${Date.now()}`,
      name,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0],
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop', // default premium avatar
    };

    setReviewsList((prev) => [newRev, ...prev]);
    setName('');
    setRating(5);
    setComment('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowAddForm(false);
    }, 2500);
  };

  const ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 16 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <section
      id="reviews"
      className="py-24 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-600 dark:text-amber-500">
            Guest Testimonials
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            What Spicy Lovers Are Saying
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Top-Level Summary Stats Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-850 text-center flex flex-col items-center justify-center">
            <h3 className="font-mono text-5xl font-extrabold text-zinc-900 dark:text-white flex items-baseline">
              4.1
              <span className="text-sm font-semibold text-zinc-400 ml-1">/ 5.0</span>
            </h3>

            <div className="flex items-center text-amber-500 mt-3 space-x-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500" />
              ))}
              <Star className="h-5 w-5 text-amber-500 fill-amber-500/30" />
            </div>

            <p className="mt-2 text-sm font-bold text-zinc-700 dark:text-zinc-350">
              3,276+ Verified Guest Reviews
            </p>
            <p className="mt-1 text-xs text-zinc-450 dark:text-zinc-500 max-w-xs leading-relaxed">
              Based on genuine check-ins, dine-in comments, and delivery surveys on Mumbai Highway.
            </p>

            <motion.button
              id="leave-review-modal-trigger"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddForm(!showAddForm)}
              className="mt-6 flex items-center space-x-2 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-855 dark:hover:bg-zinc-800 hover:bg-zinc-850 px-6 py-3 text-sm font-bold cursor-pointer"
            >
              <PlusCircle className="h-4.5 w-4.5 text-amber-500" />
              <span>Write a Guest Review</span>
            </motion.button>
          </div>

          {/* Graphical Rating Breakdown */}
          <div className="lg:col-span-7 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-850/60">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 mb-6">
              Dine-In Satisfaction Metrics
            </h4>
            <div className="space-y-4">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center">
                  <span className="font-mono text-xs font-bold text-zinc-500 w-12 flex items-center space-x-1">
                    <span>{row.stars}</span>
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden mx-4">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-650 via-amber-500 to-amber-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-650 dark:text-zinc-400 w-8 text-right">
                    {row.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating/Collapse Interactive Review Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              id="add-review-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mb-16"
            >
              <form
                onSubmit={handleSubmitReview}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200/60 dark:border-zinc-800 max-w-xl mx-auto"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <MessageSquareCode className="h-5 w-5 text-red-500" />
                  <h4 className="font-sans text-lg font-bold text-zinc-900 dark:text-white">
                    Submit Your Culinary Verdict
                  </h4>
                </div>

                {success ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mb-3 animate-[scale-in_0.4s]" />
                    <p className="text-base font-bold text-zinc-805 dark:text-zinc-100">
                      Thank You, Guest!
                    </p>
                    <p className="text-xs text-zinc-405 dark:text-zinc-400">
                      Your high-integrity feedback is live on the restaurant ticker.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-1.5 uppercase">
                        Your Full Name:
                      </label>
                      <input
                        id="review-name-input"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-1.5 uppercase">
                        Select Rating Intensity:
                      </label>
                      <div className="flex items-center space-x-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            id={`rev-star-btn-${star}`}
                            type="button"
                            onClick={() => setRating(star)}
                            className="p-1 cursor-pointer transition-transform hover:scale-115"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= rating
                                  ? 'fill-amber-550 text-amber-500'
                                  : 'text-zinc-300 dark:text-zinc-750'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-1.5 uppercase">
                        Dine-In Comment:
                      </label>
                      <textarea
                        id="review-comment-input"
                        required
                        rows={3}
                        placeholder="Share your experience about biryani flavor, hospitality, or drive-through swiftness..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                      />
                    </div>

                    <button
                      id="submit-review-action"
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-red-655 to-amber-505 bg-red-650 hover:bg-red-600 text-white font-bold rounded-xl text-sm transition-all cursor-pointer"
                    >
                      Post Review Now
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Testimonial Card Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              id={`review-card-${item.id}`}
              className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 p-6 border border-zinc-100 dark:border-zinc-850 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                {/* Header detail with client avatar and star feedback */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-10 w-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-sans text-sm font-bold text-zinc-900 dark:text-white">
                        {item.name}
                      </h5>
                      <span className="text-[10px] font-mono text-zinc-400">
                        Guest since {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: item.rating }).map((_, r) => (
                      <Star key={r} className="h-4 w-4 fill-amber-550 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote details */}
                <p className="font-sans text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              {/* Verified Badge decoration */}
              <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 flex items-center justify-center transition-all">
                <Sparkles className="h-4 w-4 text-emerald-500/30 group-hover:text-emerald-500/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

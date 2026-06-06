import { motion } from 'motion/react';
import { Flame, Users, Car, ShieldCheck, LayoutGrid, Utensils } from 'lucide-react';
import { FEATURES } from '../data';

export default function Features() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="h-6 w-6 text-red-500 fill-red-500/10" />;
      case 'Users':
        return <Users className="h-6 w-6 text-amber-500" />;
      case 'Car':
        return <Car className="h-6 w-6 text-orange-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-emerald-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="h-6 w-6 text-indigo-500" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6 text-amber-500" />;
      default:
        return <Utensils className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <section
      id="features"
      className="py-24 bg-zinc-50 dark:bg-zinc-900/40 relative overflow-hidden transition-colors"
    >
      {/* Background shapes */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-on-scroll">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-600 dark:text-amber-500">
            Why Dine With Us
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Uncompromising Standards of Flavor & Hospitality
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Features Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className="group relative rounded-3xl bg-white dark:bg-zinc-950 p-8 shadow-sm hover:shadow-xl border border-zinc-100 dark:border-zinc-800/80 hover:border-orange-500/10 dark:hover:border-amber-500/10 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Card accent glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/0 via-amber-500/0 to-amber-500/0 group-hover:from-red-600/[0.02] group-hover:to-amber-500/[0.02] transition-all duration-300 pointer-events-none" />

              {/* Icon Holder */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/60 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                <span className="group-hover:text-white transition-colors duration-300">
                  {getIcon(feature.iconName)}
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="font-sans text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

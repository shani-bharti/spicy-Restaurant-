import { motion } from 'motion/react';
import { ChefHat, Heart, ShieldAlert, Award, Smile } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ChefHat className="h-5 w-5 text-red-500" />,
      title: 'Authentic Slow-Dum Cooking',
      desc: 'Our secret blend of 24 spices is ground fresh every morning and slow-cooked in traditional handis.',
    },
    {
      icon: <Smile className="h-5 w-5 text-amber-500" />,
      title: 'Spacious Family Settings',
      desc: 'Comfortable air-conditioned family halls, separate group dining sections, and traveler amenities.',
    },
    {
      icon: <Heart className="h-5 w-5 text-pink-500 animate-pulse" />,
      title: 'Warm Deccani Hospitality',
      desc: 'Treating every traveler on the Mumbai Highway as an honored guest in a clean, hospitable space.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40 transition-colors relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-red-650/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-656 text-red-650 dark:text-amber-500">
              Our Culinary Journey
            </span>
            <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white leading-tight">
              Spicy Family Restaurant: A Highway Legacy
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-650 to-amber-500 rounded-full" />

            <p className="mt-6 font-sans text-sm sm:text-base text-zinc-650 dark:text-zinc-405 leading-relaxed">
              Serving hungry travelers, local foodies, and families on the busy Mumbai Highway
              (Muthangi, Hyderabad) for years, we have mastered the delicate science of traditional
              Hyderabadi dining. Our kitchens are guided by culinary legacy, making sure that every Dum Biryani, smoking tandoori delight, or soft butter naan served holds unmatched standard.
            </p>

            <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-450 leading-relaxed">
              Whether you are pulling over for a quick traveler drive-through bite, booking a cozy weekend dinner with your family, or celebrating a major event achievement, our highly accomplished crew guarantees that your cravings are met with hygiene, swift service, and sheer flavor.
            </p>

            {/* Core Values rows */}
            <div className="mt-10 space-y-6">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-zinc-900 dark:text-white">
                      {v.title}
                    </h4>
                    <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-0.5">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Frame Blocks */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Upper Image Frame */}
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl aspect-square border border-zinc-200 dark:border-zinc-800">
                <img
                  src="/images/family_dining_1780729766217.png"
                  alt="Traditional Family Dining Experience"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Inset Decorative Card */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 text-center flex flex-col items-center justify-center">
                  <Award className="h-8 w-8 text-amber-500 animate-[bounce_3s_infinite] mb-2" />
                  <p className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    RECOGNIZED
                  </p>
                  <p className="font-sans text-base font-black text-zinc-900 dark:text-white leading-none mt-1">
                    #1
                  </p>
                  <p className="font-sans text-[10px] text-zinc-500 dark:text-zinc-400">
                    Highway Hub in Muthangi
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md aspect-square border border-zinc-200 dark:border-zinc-800">
                  <img
                    src="/images/tandoori_platter_1780729786173.png"
                    alt="Seared Kebabs"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Bottom Large Image Frame */}
              <div className="col-span-12 rounded-3xl overflow-hidden shadow-lg aspect-[16/9] border border-zinc-200/60 dark:border-zinc-800 relative group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                  alt="Interior Warm Ambiance"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent flex items-end p-6" />
                <div className="absolute bottom-6 left-6 text-white max-w-sm">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-amber-400">
                    VISUAL INTERIOR
                  </p>
                  <p className="font-sans text-sm font-bold text-zinc-100">
                    Elegant woodwork and comfortable booths fitted to hold large gatherings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

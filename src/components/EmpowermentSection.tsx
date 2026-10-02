import React from 'react';
import { Sparkles, ArrowRight, Heart, Briefcase, ShoppingBag, GraduationCap, Home } from 'lucide-react';

interface EmpowermentSectionProps {
  onOpenBooking: () => void;
}

export const EmpowermentSection: React.FC<EmpowermentSectionProps> = ({ onOpenBooking }) => {
  const benefits = [
    {
      icon: <Home className="w-5 h-5 text-rose-600" />,
      title: 'Family & Home Management',
      text: 'Handle errands, school pick-ups, grocery shopping, and urgent family errands without relying on anyone.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-rose-600" />,
      title: 'Education & Self-Development',
      text: 'Travel comfortably and safely to university, colleges, skill classes, and workshops across Karachi.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-rose-600" />,
      title: 'Work & Employment Potential',
      text: 'Gain personal mobility for jobs, freelancing commutes, or exploring independent livelihood options.',
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      title: 'Peace of Mind & Confidence',
      text: 'Overcome hesitation on bustling roads and experience the freedom of navigating your own journey.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with overlay */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-800">
              <img
                src="/src/assets/images/empowerment_independent_woman_1790876707263.jpg"
                alt="Confident Pakistani woman driver holding car keys in Karachi"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 inset-x-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">
                  Confidence Behind the Wheel
                </p>
                <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                  Safe, supportive road training designed for women.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <span>Empowerment & Independence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Driving Is More Than a Skill — It Can Create Independence
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              For many women, learning to drive can make everyday life easier — from managing family responsibilities and shopping to commuting, education and work. Driving can also become a practical skill that may support women in pursuing employment or other income opportunities.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">
                        {b.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Driving Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

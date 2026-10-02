import React from 'react';
import {
  GraduationCap,
  Users,
  Car,
  Navigation,
  ShieldCheck,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/drivingContent';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-rose-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-rose-600" />;
      case 'Car':
        return <Car className="w-6 h-6 text-rose-600" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-rose-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Commitments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Why Choose Khanam Driving Institute?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We provide a dedicated, respectful, and structured learning atmosphere designed to transform beginner hesitation into lifelong road confidence.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-rose-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-700/60 border border-slate-600 flex items-center justify-center mb-5 group-hover:bg-rose-500/20 group-hover:border-rose-500/30 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-rose-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="urdu-text text-[13px] text-rose-300 font-medium">
                  {item.urdu}
                </span>
                <span className="text-[11px] text-slate-500">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-800/90 to-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Ready to begin in Malir Model Colony?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Experienced female instructors are available for your training.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wide transition-colors whitespace-nowrap shadow-sm"
          >
            Start Your Registration
          </button>
        </div>
      </div>
    </section>
  );
};

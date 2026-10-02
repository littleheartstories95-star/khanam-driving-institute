import React from 'react';
import { Sparkles, Check, ArrowRight, UserCheck, Shield } from 'lucide-react';

interface StudentPaceSectionProps {
  onSelectTrack: (track: string) => void;
}

export const StudentPaceSection: React.FC<StudentPaceSectionProps> = ({ onSelectTrack }) => {
  return (
    <section className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
            <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
            <span>Tailored For Your Experience Level</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Learning at Your Own Pace
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are a complete beginner or already know the basics, our instructors can help you improve your practical driving skills step by step.
          </p>
        </div>

        {/* 2 Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Beginner Track */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-rose-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                  Level 1
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Zero prior experience needed
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 mb-2 font-heading">
                Complete Beginner Learner
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Designed for students getting behind the steering wheel for the very first time. We start from ground zero in a quiet, low-stress environment.
              </p>

              <div className="space-y-3 pt-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Focus Highlights:
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Seating position, mirrors, and basic controls</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Smooth accelerator and brake feathering</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clutch control and anti-stalling (Manual)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Overcoming nervousness with patient female instructor</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectTrack('Complete Beginner')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors"
            >
              <span>Choose Beginner Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Intermediate / Refresher Track */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Level 2
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Some previous experience
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 mb-2 font-heading">
                Intermediate & Refresher
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Ideal for women who know basic driving but lack confidence on busy Karachi roads, struggle with parking, or are returning after a gap.
              </p>

              <div className="space-y-3 pt-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Focus Highlights:
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Heavy traffic navigation & lane discipline</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Parallel and tight residential parking mastery</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>U-turns, cuts, and multi-lane roundabouts</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Independent solo-driving readiness</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectTrack('Some Basic Knowledge')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs tracking-wide transition-colors"
            >
              <span>Choose Refresher Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

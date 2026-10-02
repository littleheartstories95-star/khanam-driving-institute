import React from 'react';
import { HOW_IT_WORKS_STEPS, BUSINESS_INFO } from '../data/drivingContent';
import { MessageCircle, Settings, ShieldCheck, Award } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageCircle className="w-5 h-5 text-rose-600" />;
      case 1:
        return <Settings className="w-5 h-5 text-rose-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 3:
        return <Award className="w-5 h-5 text-rose-600" />;
      default:
        return <MessageCircle className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
            <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
            <span>Simple Enrollment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Four easy steps to get you from inquiry to confident, independent driving behind the wheel.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-rose-300 hover:shadow-md transition-all duration-200 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-heading">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
          >
            <span>Start Step 01: Contact on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

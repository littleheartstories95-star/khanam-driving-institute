import React from 'react';
import { MessageCircle, MapPin, CheckCircle2, Shield, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/drivingContent';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-slate-50/60"
    >
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-rose-100/40 via-pink-50/30 to-sky-50/20 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Safe Environment Trust Marker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold text-slate-800">
                Malir Model Colony, Karachi
              </span>
              <span className="text-slate-300 font-light">|</span>
              <span className="text-xs font-medium text-rose-700">
                Women-Only Training
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6 text-balance">
              Learn to Drive.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-700">
                Build Confidence.
              </span>{' '}
              Become Independent.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Professional driving lessons exclusively for women, taught by
              experienced female driving instructors in a comfortable and
              supportive environment.
            </p>

            {/* Key Value Points (Clean unboxed format) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Female Driving Instructors</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Manual & Automatic Cars</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Practical Road Driving in Karachi</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respectful, Patient Atmosphere</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4 text-rose-400" />
                <span>Book a Driving Class</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us (03052160794)</span>
              </a>
            </div>

            {/* Trust reassurance */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Safe, respectful & tailored exclusively for female learners.</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-rose-200/50 via-pink-100/40 to-slate-200/50 blur-lg -z-10 opacity-70" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <img
                  src="/src/assets/images/hero_driving_instructor_student_1790876668742.jpg"
                  alt="Professional female driving instructor guiding female learner in Karachi"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Gradient scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating trust badge at bottom of image */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-rose-300 uppercase tracking-wider">
                        Personalized Training
                      </p>
                      <p className="text-sm font-bold text-white leading-snug">
                        Female Instructor Guided Lessons
                      </p>
                    </div>
                    <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[11px] font-medium border border-white/20 text-white">
                      Malir, Karachi
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature card */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white p-3.5 rounded-xl shadow-lg border border-slate-200/90 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Women-Friendly
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Safe & patient guidance
                  </p>
                </div>
              </div>

              {/* Vehicle Options Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Mehran (Manual) & Alto (Auto)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

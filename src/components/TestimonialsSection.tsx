import React from 'react';
import { MessageSquare, Quote, Heart, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/drivingContent';

export const TestimonialsSection: React.FC = () => {
  // 3-4 transparent placeholder testimonial cards per business instructions
  const placeholderCards = [
    {
      id: 1,
      tag: 'Verified Learner Review Slot',
      placeholderQuote: 'Add a genuine student review here.',
      placeholderAuthor: 'Student Name (Placeholder)',
      location: 'Malir Model Colony, Karachi',
      courseType: 'Manual Driving (Suzuki Mehran)',
    },
    {
      id: 2,
      tag: 'Verified Learner Review Slot',
      placeholderQuote: 'Add a genuine student review here.',
      placeholderAuthor: 'Student Name (Placeholder)',
      location: 'Malir, Karachi',
      courseType: 'Automatic Driving (Suzuki Alto)',
    },
    {
      id: 3,
      tag: 'Verified Learner Review Slot',
      placeholderQuote: 'Add a genuine student review here.',
      placeholderAuthor: 'Student Name (Placeholder)',
      location: 'Karachi',
      courseType: 'Beginner Driving Course',
    },
  ];

  const shareReviewWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Assalamualaikum, I am a student of Khanam Driving Institute and would like to share my genuine review.'
  )}`;

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
            <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
            <span>Student Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Student Reviews & Experiences
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We value genuine experiences. Review slots below are updated with authentic student feedback from our female learners in Malir Model Colony.
          </p>
        </div>

        {/* 3 Placeholder Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {placeholderCards.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-white border border-dashed border-slate-300 hover:border-rose-400 transition-all duration-200 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Slot #{card.id}
                  </span>
                </div>

                <p className="text-sm italic text-slate-500 leading-relaxed mb-6 font-normal min-h-[60px] flex items-center">
                  "{card.placeholderQuote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-800">
                    {card.placeholderAuthor}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {card.location}
                  </p>
                </div>
                <span className="text-[10px] font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                  {card.courseType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Student feedback submission invitation */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Are you a current or past student?
              </p>
              <p className="text-xs text-slate-500">
                Share your genuine feedback directly via WhatsApp to be featured here.
              </p>
            </div>
          </div>
          <a
            href={shareReviewWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
          >
            <span>Share Your Experience</span>
          </a>
        </div>
      </div>
    </section>
  );
};

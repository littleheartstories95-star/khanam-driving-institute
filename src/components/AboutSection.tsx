import React from 'react';
import { UserCheck, Shield, Award, Compass, HeartHandshake, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'Experienced Female Instructors',
      desc: 'Patient, qualified lady instructors committed to student success.',
    },
    {
      title: 'Women-Only Driving Lessons',
      desc: 'Exclusive sessions ensuring total comfort, modesty, and peace of mind.',
    },
    {
      title: 'Manual & Automatic Driving',
      desc: 'Choice of Suzuki Mehran (Manual) or Suzuki Alto (Automatic).',
    },
    {
      title: 'Practical Road Training',
      desc: 'Hands-on practice on real Karachi roads, traffic signals, and turns.',
    },
    {
      title: 'Supportive Learning Environment',
      desc: 'Encouraging atmosphere designed to eliminate anxiety and hesitation.',
    },
    {
      title: 'Focus on Confidence & Safety',
      desc: 'Mastering defensive driving habits, spatial awareness, and parking.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600">
              <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
              <span>About Khanam Driving Institute</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Empowering Women Through Driving
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Khanam Driving Institute is dedicated to helping women learn practical, safe, and confident driving. Our experienced female instructors provide a comfortable learning environment where women can develop their driving skills step by step.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 text-sm leading-relaxed space-y-2.5">
              <p className="font-semibold text-slate-900">
                A Practical Skill for Everyday Life & Future Growth
              </p>
              <p className="text-slate-600">
                Learning to drive makes daily activities significantly easier — from managing school runs and family commitments to commuting for work and grocery shopping. Furthermore, gaining independent driving proficiency equips women with a valuable, practical skill that can support greater personal autonomy and potential employment opportunities.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Location:</span>
              <span>Malir Model Colony, Karachi</span>
              <span>·</span>
              <span className="text-rose-600 font-medium">Safe & Professional</span>
            </div>
          </div>

          {/* Right Column: 6 Feature Highlights */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-rose-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

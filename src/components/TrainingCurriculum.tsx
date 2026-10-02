import React, { useState } from 'react';
import { DRIVING_SKILLS } from '../data/drivingContent';
import { CheckCircle2, Sliders, Shield, Compass, BookOpen, Layers } from 'lucide-react';

export const TrainingCurriculum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fundamentals', 'Road Dynamics', 'Maneuvers', 'Confidence & Safety'];

  const filteredSkills =
    selectedCategory === 'All'
      ? DRIVING_SKILLS
      : DRIVING_SKILLS.filter((skill) => skill.category === selectedCategory);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Fundamentals':
        return 'text-sky-700 bg-sky-50 border-sky-200';
      case 'Road Dynamics':
        return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      case 'Maneuvers':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Confidence & Safety':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <section id="courses" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
            <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
            <span>Comprehensive Syllabus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            What You Will Learn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our step-by-step practical road syllabus is carefully structured to guide women learners from basic controls to complete driving autonomy.
          </p>

          {/* Interactive Category Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category} {category === 'All' ? `(${DRIVING_SKILLS.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-rose-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-rose-600 transition-colors">
                    {String(skill.id).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${getCategoryColor(
                      skill.category
                    )}`}
                  >
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-rose-600 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Step-by-step practical lesson</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning reassurance card */}
        <div className="mt-12 p-6 rounded-2xl bg-rose-50/70 border border-rose-100/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Paced to your comfort level
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Our female instructors tailor each lesson so you never feel rushed or overwhelmed.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors whitespace-nowrap shadow-xs"
          >
            Inquire About Lessons
          </a>
        </div>
      </div>
    </section>
  );
};

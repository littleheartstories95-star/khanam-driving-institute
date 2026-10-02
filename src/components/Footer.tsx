import React from 'react';
import { MessageCircle, MapPin, Phone, ShieldCheck, Heart, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/drivingContent';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                K
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-heading">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional driving lessons for women in Malir Model Colony, Karachi. Taught by experienced female driving instructors in a supportive, comfortable environment.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-rose-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Dedicated exclusively for female learners</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">
                  About Khanam Driving
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-rose-400 transition-colors">
                  Driving Courses & Skills
                </a>
              </li>
              <li>
                <a href="#cars" className="hover:text-rose-400 transition-colors">
                  Training Cars (Mehran & Alto)
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-rose-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-400 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Directions (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Location
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Malir Model Colony, Karachi, Pakistan</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-slate-400" />
                <span>Get Directions (Malir Model Colony)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {BUSINESS_INFO.year} Khanam Driving Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Women-Focused Driving Training</span>
            <span>·</span>
            <span>Malir Model Colony, Karachi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import {
  MessageCircle,
  MapPin,
  Phone,
  Send,
  Navigation,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/drivingContent';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialTransmission?: 'Manual' | 'Automatic' | 'Not Sure';
  initialExperience?: 'Complete Beginner' | 'Some Basic Knowledge' | 'Need Refresher';
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialTransmission = 'Not Sure',
  initialExperience = 'Complete Beginner',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    experience: initialExperience,
    transmission: initialTransmission,
    preferredTime: 'Morning (Flexible)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  // Update transmission if prop changes
  React.useEffect(() => {
    if (initialTransmission) {
      setFormData((prev) => ({ ...prev, transmission: initialTransmission }));
    }
  }, [initialTransmission]);

  React.useEffect(() => {
    if (initialExperience) {
      setFormData((prev) => ({ ...prev, experience: initialExperience }));
    }
  }, [initialExperience]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Assalamualaikum Khanam Driving Institute,\n\nI would like to inquire about driving classes.\n\n*Name:* ${
      formData.fullName || 'Not provided'
    }\n*WhatsApp/Phone:* ${formData.phone || 'Not provided'}\n*Driving Experience:* ${
      formData.experience
    }\n*Preferred Transmission:* ${formData.transmission}\n*Preferred Timings:* ${
      formData.preferredTime || 'Flexible'
    }${formData.message ? `\n*Note:* ${formData.message}` : ''}\n\nPlease share class details and availability in Malir Model Colony.`;

    const targetUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setSubmittedWhatsAppUrl(targetUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const directChatUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 font-heading">
            Ready to Learn Driving?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Contact Khanam Driving Institute today and take the first step toward becoming a more confident driver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Details Card */}
            <div className="p-7 rounded-3xl bg-slate-800/90 border border-slate-700/80 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Khanam Driving Institute
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-base font-bold text-white mt-0.5">
                      Malir Model Colony, Karachi, Pakistan
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Conveniently accessible training in Malir area
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      WhatsApp & Calls
                    </p>
                    <a
                      href={directChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Quick response for admission inquiries
                    </p>
                  </div>
                </div>

                {/* Training Environment */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Dedicated Environment
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Exclusively for Women & Girls
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Guided step-by-step by experienced female instructors
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={directChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition-all text-center"
                >
                  <Navigation className="w-4 h-4 text-slate-300" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Urdu Note Card */}
            <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 text-right">
              <p className="urdu-text text-sm text-slate-200">
                ماڈل کالونی ملیر، کراچی میں خواتین کے لیے مخصوص محفوظ اور معیاری ڈرائیونگ کلاسز۔
              </p>
              <p className="text-xs text-rose-300 mt-1 text-left font-mono">
                WhatsApp: 03052160794
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200/80">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950 font-heading">
                  Driving Class Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out your preferences below. Your inquiry will connect directly to WhatsApp for fast confirmation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    We have formatted your details. If WhatsApp did not open automatically, click the button below to send your message directly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
                    >
                      Edit Inquiry Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Fatima Khan"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 03001234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Driving Experience & Transmission */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Driving Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value as any,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all cursor-pointer"
                      >
                        <option value="Complete Beginner">
                          Complete Beginner (Zero Experience)
                        </option>
                        <option value="Some Basic Knowledge">
                          Some Basic Knowledge
                        </option>
                        <option value="Need Refresher">
                          Need Refresher / Confidence Boost
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Transmission
                      </label>
                      <select
                        value={formData.transmission}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            transmission: e.target.value as any,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all cursor-pointer"
                      >
                        <option value="Manual">
                          Manual (Suzuki Mehran)
                        </option>
                        <option value="Automatic">
                          Automatic (Suzuki Alto)
                        </option>
                        <option value="Not Sure">
                          Not Sure / Advice Needed
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Timing Preference */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Timing
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all cursor-pointer"
                    >
                      <option value="Morning (Flexible)">Morning Slot</option>
                      <option value="Afternoon (Flexible)">Afternoon Slot</option>
                      <option value="Weekend / Flexible">Flexible Timing</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Additional Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific questions about lessons, timing, or location in Malir Model Colony?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 focus:outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 Respectful communication · Taught exclusively by female instructors.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

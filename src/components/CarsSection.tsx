import React, { useState } from 'react';
import { Check, Shield, Zap, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/drivingContent';

interface CarsSectionProps {
  onSelectTransmission: (type: 'Manual' | 'Automatic') => void;
}

export const CarsSection: React.FC<CarsSectionProps> = ({ onSelectTransmission }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'manual' | 'automatic'>('both');

  const manualCar = {
    name: 'Suzuki Mehran',
    transmission: 'Manual Transmission',
    badge: 'Manual Control Mastery',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    description:
      'Suitable for learners who want to learn manual driving and understand clutch, gear changing and complete manual vehicle control.',
    image: '/src/assets/images/car_suzuki_mehran_1790876685327.jpg',
    features: [
      'Manual transmission',
      'Clutch control',
      'Gear shifting',
      'Steering control',
      'Braking and acceleration',
      'Road driving practice',
    ],
    idealFor: 'Students who want comprehensive control across any manual car in Pakistan.',
    type: 'Manual' as const,
  };

  const autoCar = {
    name: 'Suzuki Alto',
    transmission: 'Automatic Transmission',
    badge: 'Effortless Urban Driving',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    description:
      'Suitable for learners who want to learn automatic driving with a simple and comfortable driving experience.',
    image: '/src/assets/images/car_suzuki_alto_1790876696171.jpg',
    features: [
      'Automatic transmission',
      'Steering control',
      'Braking and acceleration',
      'Traffic awareness',
      'Road driving practice',
      'Parking practice',
    ],
    idealFor: 'Students looking for a smooth, stress-free daily commute and quick learning.',
    type: 'Automatic' as const,
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 mb-3">
            <span className="w-6 h-[2px] bg-rose-500 rounded-full" />
            <span>Training Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Choose Your Driving Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Select between manual mastery or modern automatic convenience. Both vehicles are well-maintained and equipped for women learners.
          </p>

          {/* Interactive filter tabs */}
          <div className="mt-6 inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'both'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Vehicles (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'manual'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Manual (Suzuki Mehran)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('automatic')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'automatic'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Automatic (Suzuki Alto)
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Suzuki Mehran Manual */}
          {(activeTab === 'both' || activeTab === 'manual') && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Vehicle Image */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={manualCar.image}
                    alt="Suzuki Mehran manual driving training car in Karachi"
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold rounded-lg">
                    Manual Transmission
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-semibold rounded-md shadow-xs">
                    Suzuki Mehran
                  </div>
                </div>

                {/* Car Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-950 font-heading">
                      {manualCar.name}
                    </h3>
                    <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                      Manual
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    {manualCar.transmission}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {manualCar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="border-t border-slate-100 pt-5 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Features & Focus Areas:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {manualCar.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Taught by experienced female instructors.
                </div>
                <button
                  type="button"
                  onClick={() => onSelectTransmission('Manual')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all"
                >
                  <span>Select Manual Training</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Suzuki Alto Automatic */}
          {(activeTab === 'both' || activeTab === 'automatic') && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                {/* Vehicle Image */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={autoCar.image}
                    alt="Suzuki Alto automatic driving training car in Karachi"
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-700/90 backdrop-blur-xs text-white text-xs font-bold rounded-lg">
                    Automatic Transmission
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-semibold rounded-md shadow-xs">
                    Suzuki Alto
                  </div>
                </div>

                {/* Car Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-extrabold text-slate-950 font-heading">
                      {autoCar.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      Automatic
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    {autoCar.transmission}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {autoCar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="border-t border-slate-100 pt-5 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Features & Focus Areas:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {autoCar.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Taught by experienced female instructors.
                </div>
                <button
                  type="button"
                  onClick={() => onSelectTransmission('Automatic')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all"
                >
                  <span>Select Automatic Training</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

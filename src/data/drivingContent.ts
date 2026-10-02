import { DrivingSkill, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Khanam Driving Institute',
  tagline: 'Learn to Drive. Build Confidence. Become Independent.',
  location: 'Malir Model Colony, Karachi, Pakistan',
  phone: '03052160794',
  whatsappNumber: '923052160794', // formatted for wa.me
  whatsappDisplay: '03052160794',
  defaultWhatsAppMessage: 'Assalamualaikum, I would like to get information about driving classes at Khanam Driving Institute.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Malir+Model+Colony+Karachi+Pakistan',
  year: '2026',
};

export const DRIVING_SKILLS: DrivingSkill[] = [
  {
    id: 1,
    title: 'Basic vehicle controls',
    category: 'Fundamentals',
    description: 'Understanding pedals, switches, mirrors, dashboard indicators, and driver posture.',
  },
  {
    id: 2,
    title: 'Steering control',
    category: 'Fundamentals',
    description: 'Smooth steering hand placement, hand-over-hand technique, and precise vehicle trajectory.',
  },
  {
    id: 3,
    title: 'Starting and stopping',
    category: 'Fundamentals',
    description: 'Gradual ignition routines, smooth acceleration, gentle progressive braking, and stalling prevention.',
  },
  {
    id: 4,
    title: 'Accelerator and brake control',
    category: 'Fundamentals',
    description: 'Developing pedal sensitivity for smooth speed modulation in stop-and-go Karachi traffic.',
  },
  {
    id: 5,
    title: 'Clutch control for manual cars',
    category: 'Fundamentals',
    description: 'Finding the biting point, anti-stall methods, and smooth clutch release on Suzuki Mehran.',
  },
  {
    id: 6,
    title: 'Gear changing',
    category: 'Fundamentals',
    description: 'Timely upshifting and downshifting matching vehicle speed and road gradients.',
  },
  {
    id: 7,
    title: 'Turning and corners',
    category: 'Road Dynamics',
    description: 'Judging corner speed, mirror checks, timely indicator signals, and lane entry.',
  },
  {
    id: 8,
    title: 'Lane discipline',
    category: 'Road Dynamics',
    description: 'Maintaining center lane position, blind spot mirror checks, and safe lane transitions.',
  },
  {
    id: 9,
    title: 'Traffic awareness',
    category: 'Road Dynamics',
    description: 'Anticipating pedestrian movements, motorbikes, rickshaws, and dense urban road conditions.',
  },
  {
    id: 10,
    title: 'Road signs & basic traffic rules',
    category: 'Road Dynamics',
    description: 'Mastering priority at roundabouts, one-ways, traffic signals, speed limits, and road markings.',
  },
  {
    id: 11,
    title: 'Parking techniques',
    category: 'Maneuvers',
    description: 'Parallel parking, 90-degree bay parking, angle parking, and driveway entry with spatial accuracy.',
  },
  {
    id: 12,
    title: 'Reverse driving',
    category: 'Maneuvers',
    description: 'Backing straight, reversing around corners using mirrors, and controlled low-speed navigation.',
  },
  {
    id: 13,
    title: 'U-turns',
    category: 'Maneuvers',
    description: 'Safe execution of U-turns at designated cuts on Karachi main avenues with proper lane yielding.',
  },
  {
    id: 14,
    title: 'Practical road driving',
    category: 'Confidence & Safety',
    description: 'Real-world driving through neighborhood streets and main roads in Malir and surrounding areas.',
  },
  {
    id: 15,
    title: 'Confidence-building exercises',
    category: 'Confidence & Safety',
    description: 'Supportive exercises designed to reduce anxiety, manage nervous hesitation, and foster independence.',
  },
  {
    id: 16,
    title: 'Safe & responsible driving habits',
    category: 'Confidence & Safety',
    description: 'Defensive driving habits, keeping safe following distances, mirror-signal-maneuver routine.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you teach only women?',
    answer: 'Yes. Khanam Driving Institute provides driving lessons specifically for women and girls in a comfortable, safe, and respectful environment.',
  },
  {
    id: 'faq-2',
    question: 'Are female instructors available?',
    answer: 'Yes. All driving lessons are conducted exclusively by experienced female driving instructors who understand the unique learning pace and comfort requirements of women learners.',
  },
  {
    id: 'faq-3',
    question: 'Do you teach manual driving?',
    answer: 'Yes. Manual driving lessons are available using our dedicated Suzuki Mehran, covering complete clutch control, gear shifting, and vehicle mechanics.',
  },
  {
    id: 'faq-4',
    question: 'Do you teach automatic driving?',
    answer: 'Yes. Automatic driving lessons are available using the Suzuki Alto, offering an easy, smooth, and stress-free driving experience.',
  },
  {
    id: 'faq-5',
    question: 'Where is the institute located?',
    answer: 'Khanam Driving Institute is conveniently located in Malir Model Colony, Karachi, Pakistan.',
  },
  {
    id: 'faq-6',
    question: 'How can I contact the institute?',
    answer: 'You can contact us directly through WhatsApp or phone call at 03052160794. Our team is happy to answer your questions and assist with scheduling.',
  },
  {
    id: 'faq-7',
    question: 'Can a complete beginner learn driving?',
    answer: 'Yes, absolutely. Beginners start from zero knowledge with basic cockpit controls and progressively build their skills and confidence step by step at their own pace.',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    iconName: 'GraduationCap',
    title: 'Experienced Female Instructors',
    description: 'Learn from experienced female driving instructors who understand the needs, safety, and comfort of women learners.',
    urdu: 'تجربہ کار لیڈی انسٹرکٹرز',
  },
  {
    iconName: 'Users',
    title: 'Women-Only Training',
    description: 'Our driving lessons are designed specifically for women in a respectful, comfortable, and supportive environment.',
    urdu: 'خواتین کے لیے مخصوص محفوظ ماحول',
  },
  {
    iconName: 'Car',
    title: 'Manual & Automatic Cars',
    description: 'Learn according to your needs with both manual (Suzuki Mehran) and automatic (Suzuki Alto) transmission options.',
    urdu: 'مینول اور آٹومیٹک گاڑیاں',
  },
  {
    iconName: 'Navigation',
    title: 'Practical Driving',
    description: 'Develop real-world driving skills through hands-on practical road training on actual Karachi routes.',
    urdu: 'حقیقی سڑکوں پر پریکٹیکل ٹریننگ',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Safety First',
    description: 'Learn responsible, careful, and confident driving habits with strict emphasis on safety and road discipline.',
    urdu: 'حفاظتی تدابیر اور ذمہ دارانہ ڈرائیونگ',
  },
  {
    iconName: 'HeartHandshake',
    title: 'Build Confidence',
    description: 'Progress step by step with patient guidance until you feel completely calm, capable, and comfortable behind the wheel.',
    urdu: 'مرحلہ وار مکمل اعتماد کی بحالی',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Reach out to Khanam Driving Institute easily via WhatsApp or direct phone call at 03052160794.',
  },
  {
    number: '02',
    title: 'Discuss Your Requirements',
    description: 'Tell us about your driving experience, whether you prefer manual (Suzuki Mehran) or automatic (Suzuki Alto), and your preferred timings.',
  },
  {
    number: '03',
    title: 'Start Your Lessons',
    description: 'Begin hands-on driving practice in a calm, women-friendly environment with our experienced female instructor.',
  },
  {
    number: '04',
    title: 'Build Confidence',
    description: 'Practice progressively on local roads, master parking and maneuvers, and develop independent road-driving competence.',
  },
];

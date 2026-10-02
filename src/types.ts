export interface DrivingSkill {
  id: number;
  title: string;
  category: 'Fundamentals' | 'Road Dynamics' | 'Maneuvers' | 'Confidence & Safety';
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  experience: 'Complete Beginner' | 'Some Basic Knowledge' | 'Need Refresher';
  transmission: 'Manual' | 'Automatic' | 'Not Sure';
  preferredTime?: string;
  message: string;
}

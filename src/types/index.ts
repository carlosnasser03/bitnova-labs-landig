// Types centralizadas para toda la app

export interface ITestimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  comment: string;
  avatar?: string;
  socialMedia: 'facebook' | 'instagram' | 'linkedin' | 'google';
}

export interface IBenefit {
  id: string;
  icon: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface IFeature {
  category: string;
  bitnova: string;
  traditional: string;
  highlight?: boolean;
}

export interface IFAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'pricing' | 'delivery' | 'technology' | 'support' | 'maintenance' | 'security' | 'saas' | 'process';
}

export interface IContactFormData {
  name: string;
  email: string;
  company: string;
  service: 'web' | 'saas' | 'security' | 'consulting';
  message: string;
}

export interface IContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export interface Niche {
  id: number;
  title: string;
  description: string;
  needs: string[];
  iconName: string; // Using string to map to Lucide icons dynamically or conditionally
  opportunityLevel: 'High' | 'Medium' | 'Specialized';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

export interface Tier {
  level: number;
  title: string;
  description: string;
  niches: string[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface FeatureProps {
  category: string;
  title: string;
  description: string;
  color: 'orange' | 'green' | 'purple' | 'blue';
  align?: 'left' | 'right';
  visual: ReactNode;
  icon: ReactNode;
}

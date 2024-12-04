import { ReactNode } from 'react';

export interface ProjectType {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

export interface ServiceType {
  icon: ReactNode;
  title: string;
  description: string;
}
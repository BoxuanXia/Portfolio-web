import { AboutPageClient } from './AboutPageClient';
import { aboutContent } from '@/data/about-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Boxuan Xia | GIS Specialist',
  description:
    'GIS specialist transforming geospatial data into actionable insights through Web GIS innovation and spatial analysis.',
  openGraph: {
    title: 'About - Boxuan Xia | GIS Specialist',
    description:
      'GIS specialist transforming geospatial data into actionable insights through Web GIS innovation and spatial analysis.',
    url: 'https://boxuanxia.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageClient content={aboutContent} />;
}

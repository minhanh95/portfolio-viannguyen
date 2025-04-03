'use client';

import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled for components that use browser APIs
export const DynamicGlowCard = dynamic(
  () => import('../helper/glow-card'),
  { ssr: false }
);

export const DynamicMarquee = dynamic(
  () => import('react-fast-marquee'),
  { ssr: false }
);

export const DynamicToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

export const DynamicLottie = dynamic(
  () => import('../helper/animation-lottie'),
  { ssr: false }
); 
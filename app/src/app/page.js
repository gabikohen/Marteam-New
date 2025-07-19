'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection'; 
import Footer from '../app/components/Footer';
import Testimonial from '../app/components/Testimonios';
import QuienesSomos from '@/app/components/QuienesSomos';
import { devIndicatorServerState } from 'next/dist/server/dev/dev-indicator-server-state';

// Importación dinámica de la Ruleta
const Ruleta = dynamic(() => import('../app/components/Ruleta'), { ssr: false });

export default function Home() {
  const [ruletaVisible, setRuletaVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRuletaVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <Testimonial />
      <Footer />
      {ruletaVisible && <Ruleta onClose={() => setRuletaVisible(false)} />}
    </>
  );
}
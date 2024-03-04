"use client";

import './globals.css'
import Hero from "./_components/Hero";
import SiteHeader from "./_components/SiteHeader";
import BoxSection from "./_components/BoxSection";
import VideoSection from "./_components/VideoSection";
import Plans from './_components/Plans';
import Testimonial from './_components/Testimonial';
import FAQ from './_components/FAQ';
import Footer from './_components/Footer';
import Image from 'next/image';

export default function Home() {
  return <div className="w-100 overflow-hidden">
    <Image className="background background--1" src="/bg-1.svg" width={2000} height={1500} alt="background" />
    <Image className="background background--2" src="/bg-2.svg" width={2000} height={1500} alt="background" />
    
    <SiteHeader />
    <Hero />
    <BoxSection />
    <VideoSection />
    
    <Plans />
    <Testimonial />
    <FAQ />
    <Footer />
  </div>
}
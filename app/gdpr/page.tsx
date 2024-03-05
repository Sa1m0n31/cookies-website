import SiteHeader from "../_components/SiteHeader";
import GdprHero from './_components/GdprHero';
import GdprGrid from './_components/GdprGrid';
import Plans from '../_components/Plans';
import Footer from '../_components/Footer';
import Article from './_components/Article';
import Image from 'next/image';

export default function GdprPage() {
  return <div className="w-100 overflow-hidden">
    <Image className="background background--6" src="/gdpr-bg-1.svg" width={2000} height={2000} alt="background" />
    
    <SiteHeader />
    <GdprHero />
    <GdprGrid />
    <Article />
    <Plans homepage={false} />
    <Footer />
  </div>
}
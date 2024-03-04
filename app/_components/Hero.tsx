import Image from 'next/image'
import HeroForm from './HeroForm.tsx'
import HeroContent from './HeroContent.tsx'
import HeroChecklist from './HeroChecklist.tsx'
import HeroBottom from './HeroBottom.tsx'

export default function Hero() {
  return <main className="w-11/12 lg:w-full max-w-4xl mx-auto mt-48 relative z-20">
    <div className="heroBackground absolute -top-24 flex justify-center align-center m-auto">
      <Image className="w-44" src="/check-background.svg" width={171} height={171} alt="quality-background" />
      <Image className="heroBackground__check w-24 absolute-center" src="/check-white.svg" width={86} height={86} alt="quality" />
    </div>
    
    <div className="hero overflow-hidden relative p-4 lg:py-16 lg:px-28 rounded-3xl">
      <HeroContent />
      <HeroForm />
      <HeroChecklist />
      <HeroBottom />
    </div>
  </main>
}
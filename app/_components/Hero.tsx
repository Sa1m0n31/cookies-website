import Image from 'next/image'
import HeroForm from './HeroForm.tsx'
import HeroContent from './HeroContent.tsx'
import HeroChecklist from './HeroChecklist.tsx'
import HeroBottom from './HeroBottom.tsx'

export default function Hero() {
  return <main className="w-11/12 lg:w-full max-w-4xl mx-auto mt-40 lg:mt-48 relative z-20">
    <div className="heroBackground absolute -top-16 lg:-top-24 flex justify-center align-center m-auto">
      <Image className="w-44" 
        src="/check-background.svg" 
        width={171}
        height={171} 
        alt="quality-background" />
    </div>
    
    <div className="hero relative p-4 pt-16 pb-8 lg:py-16 lg:px-28 rounded-3xl">
      <HeroContent />
      <HeroForm />
      <HeroChecklist />
      <HeroBottom />
    </div>
  </main>
}
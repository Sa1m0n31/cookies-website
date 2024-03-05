import PlanItem from "./PlanItem";
import Image from 'next/image';
import { plans } from '../_static/content.ts';

interface PlansProps {
  homepage: boolean
}

export default function Plans({homepage}: PlansProps) {
  return <div className="w-full xl:w-screen relative">
    {homepage ? <Image className="background background--4" 
      src="/bg-4.svg" 
      width={2000} 
      height={2000} 
      alt="background" /> : <span className="background background--8"></span>}
  
    <div className={`bg-black max-w-[1088px] mx-auto lg:rounded-3xl pt-16 px-4 lg:px-0 mt-20 lg:mt-[150px] relative z-20 ${homepage ? '' : 'mb-48'}`}>
      <header className="flex flex-col justify-center items-center">
        <span className="sectionHeader__before text-xs lg:text-normal text-center text-[#DBD1D1] uppercase">
          Tailored solutions for every compliance requirement
        </span>
        <h5 className="text-white text-center text-2xl lg:text-5xl font-extrabold mt-3 mb-8 lg:mb-16">
          Find Your Perfect Plan
        </h5>
      </header>

      <div className="flex flex-col lg:flex-row justify-center gap-6 -mt-10 lg:mt-0 translate-y-[40px] lg:translate-y-0 items-center lg:items-start">
        {plans.map((item, index) => {
          const { title, subtitle, price, link, points, theme } = item;

          return (
            <PlanItem
              index={index}
              title={title}
              subtitle={subtitle}
              price={price}
              link={link}
              points={points}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  </div>
}

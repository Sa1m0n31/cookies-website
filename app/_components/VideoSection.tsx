import Image from "next/image";
import GridItem from "./GridItem";
import { videoSectionGrid } from '../_static/content.ts';

export default function VideoSection() {
  return <div className="w-full xl:w-screen relative">
    <Image className="background background--3" 
      src="/bg-3.svg" 
      width={1221} 
      height={1221} 
      alt="background" />
    
    <div className="w-11/12 xl:w-full max-w-[1320px] mx-auto my-20 lg:my-56 relative z-20">
      <header className="flex flex-col justify-center items-center">
        <span className="text-center sectionHeader__before block text-[#7B6969] uppercase">
          Cookie management
        </span>
        <h3 className="text-center font-extrabold text-4xl lg:text-6xl mt-4">
          Your Path to Easy Compliance
        </h3>
      </header>

      <div className="relative">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex w-full max-w-[350px] gap-1 lg:gap-3 justify-between lg:justify-center items-center z-20">
          <a href=""
            className="btn flex justify-center items-center py-2 px-4 bg-white gap-2 text-sm">
            What is Cookie Consent?
            <Image src="/arrow-right-red.svg" width={16} height={16} alt="arrow" />
          </a>
          <a href=""
             className="btn flex justify-center items-center py-2 px-4 bg-white gap-2 text-sm">
            FAQ
            <Image src="/arrow-down-red.svg" width={16} height={16} alt="arrow" />
          </a>
        </div>

        <Image
          className="w-full max-w-[872px] mx-auto mt-0 mb-14 translate-y-[40px] sm:translate-y-0"
          src="/video-screen.svg"
          width={872}
          height={464}
          alt="video"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-36 mb-12">
        {videoSectionGrid.map((item, index) => {
          const { icon, title, content } = item;

          return <GridItem icon={icon}
                   title={title}
                   content={content}
                   extraClass={'bg-white'}
                   index={index} />
        })}
      </div>

      <a
        href=""
        className="btn mx-auto text-white flex justify-center items-center gap-3 font-bold w-full md:w-[200px] h-[52px] rounded-full bg-[#E50013] relative z-20"
      >
        Get started
        <Image
          src="/button-arrow.svg"
          width={24}
          height={24}
          alt="get-started"
        />
      </a>
    </div>
  </div>
}

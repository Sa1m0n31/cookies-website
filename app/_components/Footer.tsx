import Image from 'next/image';

export default function Footer() {
  return <footer className="w-11/12 2xl:w-full 2xl:max-w-[1320px] mx-auto mb-4 xl:mb-20 px-6 w-full h-auto xl:h-[84px] rounded-xl xl:rounded-full bg-[#FBFBFB] flex flex-col xl:flex-row justify-between items-center p-7 xl:py-0">
    <div className="flex justify-start items-end gap-3">
      <a href="/" className="flex gap-2 md:gap-5 justify-between align-center">
        <Image src="/logo.svg" width={27} height={27} alt="logo" />
        <span className="font-extrabold text-xl md:text-2xl">
          Cookie Service
        </span>
      </a>

      <span className="text-[#919191] text-[11px]">
        by INCORE
      </span>
    </div>

    <div className="flex flex-col lg:flex-row justify-end items-center gap-8 mt-8 xl:mt-0 w-full lg:w-auto">
      <nav className="flex flex-col lg:flex-row gap-12 align-center">
        <a href="" className="font-bold hover:opacity-80 text-center">
          Learn More
        </a>
        <a href="" className="font-bold hover:opacity-80 text-center">
          Pricing
        </a>
        <a href="" className="font-bold hover:opacity-80 text-center">
          Contact
        </a>
        <a href="" className="font-bold hover:opacity-80 text-center">
          Privacy Policy
        </a>
        <a href="" className="font-bold hover:opacity-80 text-center">
          Legal Notice
        </a>
      </nav>

      <a href="" className="btn bg-black text-white font-bold flex gap-3 justify-center items-center w-full lg:w-36 h-9 rounded-full">
        Get started
        <Image src="/button-arrow.svg" width={16} height={16} alt="get-started" />
      </a>
    </div>
  </footer>
}
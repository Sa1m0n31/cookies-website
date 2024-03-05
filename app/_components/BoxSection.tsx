import Image from 'next/image';

export default function BoxSection() {
  return <section className="w-11/12 xl:max-w-[1320px] mx-auto mt-24 bg-transparent relative z-20">
    <header className="mb-12">
      <span className="sectionHeader__before block text-center lg:text-left text-[#7B6969] w-full uppercase">
        Superior Benefits
      </span>
      <h2 className="font-extrabold text-3xl lg:text-4xl 2xl:text-6xl mt-4 text-center lg:text-left w-full">
        Unlocking Efficiency and Security
      </h2>
    </header>

    <div className="flex flex-col lg:flex-row gap-5 mb-5 justify-between items-center">
      <div className="box--1 w-full max-w-[500px] lg:max-w-[424px] h-[400px] relative p-8 bg-[#FBFBFB] rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 max-w-[346px]">
          Automated Compliance Updates
        </h3>
        <p className="text-[#110000]">
          Stay current with evolving laws. Our service automatically aligns your site with the latest cookie regulations.
        </p>
      </div>

      <div className="box--2 overflow-hidden w-full max-w-[500px] h-[400px] lg:max-w-[538px] relative p-8 bg-black rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 text-white">
          Customizable Consent Banners
        </h3>
        <p className="box--2__text text-[#7B7B7B] relative">
          Tailor cookie banners to fit your brand. Customize design and messaging for seamless website integration.
        </p>

        <Image className="w-full h-[215px] lg:h-auto -translate-x-1/2 bottom-0 left-1/2 absolute"
          src="/shape-2.svg"
          width={475}
          height={280}
          alt="background" />
      </div>

      <div className="box--3 w-full max-w-[500px] h-[400px] lg:max-w-[314px] relative p-8 bg-[#FBFBFB] rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 max-w-[222px]">
          User Consent Logging
        </h3>
        <p className="text-[#110000]">
          Reliable consent record-keeping. Securely log user consents to maintain comprehensive compliance records
        </p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
      <div className="box--4 min-h-[210px] relative px-8 py-12 xl:pr-96 bg-[#FBFBFB] rounded-3xl w-full max-w-[500px] lg:max-w-[1200px]">
        <h3 className="text-2xl font-bold pb-2">
          Real-time Cookie Scanning
        </h3>
        <p className="text-[#110000]">
          Instantly identify and categorize cookies. Our real-time scanning ensures your website is always compliant.
        </p>
      </div>

      <div className="box--5 min-h-[210px] relative px-8 xl:px-3 py-8 xl:pl-52 bg-black rounded-3xl w-full max-w-[500px] lg:max-w-[1200px] flex flex-col items-left justify-center">
        <h3 className="text-white text-2xl font-bold pb-2 max-w-[310px] w-full">
          User Experience Optimization
        </h3>
        <p className="text-[#7B7B7B]">
          Enhance visitor satisfaction. Balance compliance with an optimal user experience on your website.
        </p>
      </div>
    </div>
  </section>
}
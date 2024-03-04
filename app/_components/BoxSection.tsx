export default function BoxSection() {
  return <section className="w-11/12 xl:max-w-[1320px] mx-auto mt-24 bg-transparent relative z-20">
    <header className="mb-12">
      <span className="sectionHeader__before block text-center lg:text-left text-[#7B6969] w-full uppercase">
        Superior Benefits
      </span>
      <h2 className="font-extrabold text-3xl lg:text-6xl mt-4 text-center lg:text-left w-full">
        Unlocking Efficiency and Security
      </h2>
    </header>

    <div className="flex flex-col lg:flex-row gap-5 mb-5 justify-between items-center">
      <div className="box--1 w-full max-w-[500px] lg:max-w-[424px] h-[400px] relative p-8 pb-52 bg-[#FBFBFB] rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 max-w-[346px]">
          Automated Compliance Updates
        </h3>
        <p className="text-[#110000]">
          Stay current with evolving laws. Our service automatically aligns your site with the latest cookie regulations.
        </p>
      </div>

      <div className="box--2 w-full max-w-[500px] h-[400px] lg:max-w-[538px] relative p-8 pb-56 bg-black rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 text-white">
          Customizable Consent Banners
        </h3>
        <p className="text-[#7B7B7B]">
          Tailor cookie banners to fit your brand. Customize design and messaging for seamless website integration.
        </p>
      </div>

      <div className="box--3 w-full max-w-[500px] h-[400px] lg:max-w-[314px] relative p-8 pb-52 bg-[#FBFBFB] rounded-3xl">
        <h3 className="text-2xl font-bold pb-2 max-w-[222px]">
          User Consent Logging
        </h3>
        <p className="text-[#110000]">
          Reliable consent record-keeping. Securely log user consents to maintain comprehensive compliance records
        </p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
      <div className="box--4 h-[210px] relative px-8 py-12 lg:pr-96 bg-[#FBFBFB] rounded-3xl w-full max-w-[500px] lg:max-w-[1200px]">
        <h3 className="text-2xl font-bold pb-2">
          Real-time Cookie Scanning
        </h3>
        <p className="text-[#110000]">
          Instantly identify and categorize cookies. Our real-time scanning ensures your website is always compliant.
        </p>
      </div>

      <div className="box--5 h-[210px] relative px-8 lg:px-3 py-8 lg:pl-52 bg-black lg:bg-[#FBFBFB] rounded-3xl w-full max-w-[500px] lg:max-w-[1200px]">
        <h3 className="text-white lg:text-black text-2xl font-bold pb-2 max-w-[310px] ">
          User Experience Optimization
        </h3>
        <p className="text-[#7B7B7B]">
          Enhance visitor satisfaction. Balance compliance with an optimal user experience on your website.
        </p>
      </div>
    </div>
  </section>
}
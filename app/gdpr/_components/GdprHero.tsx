import Image from 'next/image';

export default function GdprHero() {
  return <main className="mt-32 xl:mt-44 mb-20 mx-auto w-11/12 max-w-[870px] relative z-20">
    <h1 className="text-2xl lg:text-[80px] font-extrabold">
      GDPR
    </h1>
    <h2 className="sectionHeader__before text-sm lg:text-lg text-[#7B6969] uppercase my-4 lg:my-8">
      Why It Matters for Your Website
    </h2>

    <p className="mb-10 text-normal lg:text-lg font-medium">
      In today&apos;s digital landscape, data privacy has become a paramount concern, and the General Data
      Protection Regulation (GDPR) stands at the forefront of this movement. As an EU law, GDPR sets stringent
      standards for data protection, fundamentally reshaping the way businesses approach data privacy. It&apos;s
      not just an EU concern; any website with EU visitors must comply, making it a global priority.
    </p>

    <a href="/login"
      className="btn text-white flex justify-center items-center gap-3 font-bold w-full md:w-[285px] h-[52px] rounded-full bg-[#E50013] relative z-20">
      Get Compliant Now

      <Image
        src="/button-arrow.svg"
        width={24}
        height={24}
        alt="get-started"
      />
    </a>
  </main>
}

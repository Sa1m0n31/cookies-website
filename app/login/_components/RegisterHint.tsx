import Image from 'next/image';

export default function RegisterHint() {
  return <div className="bg-black w-full p-4 xl:px-12 xl:py-7 flex flex-col md:flex-row gap-3 justify-between items-center rounded-3xl">
    <p className="text-white font-bold text-sm xl:text-lg">
      Don't have an account yet?
    </p>

    <a href="/" 
      className="btn w-[182px] bg-white text-black font-bold flex gap-3 justify-center items-center h-9 lg:h-14 rounded-full">
      Register

      <Image src="/arrow-right-black.svg"
        width={16} 
        height={16} 
        alt="get-started" />
    </a>
  </div>
}
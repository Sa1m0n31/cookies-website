import Image from 'next/image';
import LoginForm from './_components/LoginForm';
import RegisterHint from './_components/RegisterHint';

export default function LoginPage() {
  return <div className="w-full h-screen min-h-[800px] flex flex-col lg:flex-row overflow-hidden">
    <div className="login__left pb-10 lg:pb-0 relative w-full lg:w-1/2 px-4 lg:pl-10 lg:pr-20 2xl:pr-[124px] flex justify-end items-start">
      <div className="w-full 2xl:w-[536px] relative z-20">
        <a href="/" className="flex gap-3 md:gap-5 justify-start align-center mt-8">
          <Image src="/logo.svg"
            width={27}
            height={27}
            alt="logo" />

          <span className="font-extrabold text-2xl">
            Cookie Service
          </span>
        </a>

        <div className="w-full max-w-[536px] mt-12 lg:mt-24">
          <h1 className="font-extrabold text-2xl lg:text-5xl">
            Login
          </h1>

          <LoginForm />
          <RegisterHint />
        </div>
      </div>
    </div>

    <div className="login__right hidden lg:block relative bg-white w-full lg:w-1/2 pl-20 2xl:pl-[124px] pr-10">
      <h2 className="text-xl lg:text-4xl font-extrabold max-w-[536px] mt-[308px] mb-4">
        <span className="block">Automated</span>
        <span className="block">Compliance Updates</span>
      </h2>

      <p className="text-[#110000] text-xl max-w-[536px]">
        Stay current with evolving laws. Our service automatically aligns your site with the latest cookie regulations.
      </p>
    </div>
  </div>
}

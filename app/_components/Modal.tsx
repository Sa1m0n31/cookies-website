import { useRef, useEffect } from 'react';
import Image from 'next/image';
import useActionOnEscapePress from '../_hooks/useActionOnEscapePress';

export default function Modal() {
  const modalRef = useRef(null);
  const modalInnerRef = useRef(null);

  useEffect(() => {
    if(modalRef && modalInnerRef) {
      openModal();
    }
  }, [modalRef, modalInnerRef]);

  const openModal = () => {
    modalRef.current.style.opacity = '1';

    setTimeout(() => {
      modalInnerRef.current.style.transform = 'translateY(0)';
      modalInnerRef.current.style.opacity = '1';
    }, 300);
  }

  const closeModal = () => {
    modalInnerRef.current.style.transform = 'translateY(2rem)';
    modalInnerRef.current.style.opacity = '0';

    setTimeout(() => {
      modalRef.current.style.opacity = '0';

      setTimeout(() => {
        modalRef.current.style.zIndex = '-100';
      }, 300);
    }, 500);
  }

  useActionOnEscapePress(closeModal);

  return <div ref={modalRef}
           className="fixed top-0 left-0 w-full h-screen min-h-[400px] lg:min-h-[800px] z-50 flex justify-center items-center bg-black/50 backdrop-blur-md opacity-0 transition-all duration-300">
    <div ref={modalInnerRef}
      className="bg-white modal__inner w-11/12 max-w-[648px] p-4 lg:p-8 rounded-3xl relative opacity-0 translate-y-10 transition-all duration-500">
      <button onClick={closeModal}
        className="btnModalClose bg-white flex justify-center items-center absolute -top-3 -right-3 w-8 h-8 lg:w-12 lg:h-12 rounded-full z-30">
        <Image className="w-4 h-4 lg:w-6 lg:h-6"
          src="/x.svg"
          width={24}
          height={24}
          alt="close" />
      </button>

      <p className="font-extrabold text-2xl lg:text-4xl">
        GDPR
      </p>
      <p className="text-[#5B5B5B] mt-6 mb-4 relative z-30">
        <span className="font-bold text-black">GDPR</span>, or <span className="font-bold text-black">General Data Protection Regulation</span>, is a comprehensive data privacy law in the EU that protects personal data and privacy, giving individuals more control over their personal information.
      </p>

      <button onClick={closeModal}
        className="bg-transparent text-[#E50013] font-extrabold">
        Learn more
      </button>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center w-full mt-8 lg:mt-16">
        <button onClick={closeModal}
          className="bg-black w-full lg:w-1/2 flex justify-center items-center text-white text-normal lg:text-lg font-bold h-[52px] rounded-full">
          Close
        </button>

        <a href="/login"
          className="btn mx-auto text-white flex justify-center items-center gap-3 font-bold w-full lg:w-1/2 h-[52px] rounded-full bg-[#E50013]">
          Check your website

          <Image
            src="/button-arrow.svg"
            width={24}
            height={24}
            alt="get-started"
          />
        </a>
      </div>
    </div>
  </div>
}

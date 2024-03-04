import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function SiteHeader() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const siteHeaderElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > 50 && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentPosition <= 50 && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (scrollDirection === 'down') {
      siteHeaderElement.current.style.backgroundColor = 'white';
    } else if (scrollDirection === 'up') {
      siteHeaderElement.current.style.backgroundColor = 'transparent';
    }
  }, [scrollDirection]);
  
  return <header ref={siteHeaderElement} 
           className="w-full flex justify-center align-center bg-transparent fixed mx-auto py-6 mb-28 top-0 z-50 transition-all duration-500">
    <div className="flex justify-start md:justify-between items-center w-11/12 lg:w-[896px]">
      <button className="mobileMenuBtn overflow-visible relative block md:hidden transparent w-6 h-6 mr-9">
        <Image src="/menu.svg"
          width={24}
          height={24}
          alt="menu" />
      </button>
      
      <a href="/" className="flex gap-3 md:gap-5 justify-between align-center">
        <Image src="/logo.svg" width={27} height={27} alt="logo" />
        <span className="font-extrabold text-2xl">
          Cookie Service
        </span>
      </a>

      <nav className="gap-12 align-center hidden md:flex">
        <a href="" className="font-bold hover:opacity-80">
          Learn More
        </a>
        <a href="" className="font-bold hover:opacity-80">
          Pricing
        </a>
        <a href="" className="font-bold hover:opacity-80">
          Contact
        </a>
        <a href="" className="font-bold hover:opacity-80">
          Join
        </a>
      </nav>
    </div>
  </header>
}
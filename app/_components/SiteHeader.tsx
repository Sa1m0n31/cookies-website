"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import useChangeTopBackgroundOnScroll from '../_hooks/useChangeTopBackgroundOnScroll.tsx';
import { topMenu } from '../_static/content.ts';

export default function SiteHeader() {
  const siteHeaderElement = useRef(null);

  useChangeTopBackgroundOnScroll(siteHeaderElement);
  
  return <header ref={siteHeaderElement} 
           className="w-full flex justify-center align-center bg-transparent fixed mx-auto py-6 mb-28 top-0 z-40 transition-all duration-500">
    <div className="flex justify-start md:justify-between items-center w-11/12 lg:w-[896px]">
      <button className="mobileMenuBtn overflow-visible relative block md:hidden transparent w-6 h-6 mr-9">
        <Image src="/menu.svg"
          width={24}
          height={24}
          alt="menu" />
      </button>
      
      <a href="/" className="flex gap-3 md:gap-5 justify-between align-center">
        <Image src="/logo.svg" 
          width={27} 
          height={27}
          alt="logo" />
        
        <span className="font-extrabold text-2xl">
          Cookie Service
        </span>
      </a>

      <nav className="gap-12 align-center hidden md:flex">
        {topMenu.map((item, index) => {
             const { label, link } = item;
             
             return <a href={link}
                      key={index}
                      className="font-bold hover:opacity-80">
               {label}
             </a>
        })}
      </nav>
    </div>
  </header>
}
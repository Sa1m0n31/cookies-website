import React, { useState } from 'react'
import Image from 'next/image'

export default function HeroForm() {
  const [websiteName, setWebsiteName] = useState('');

  const handleSubmit = () => {
    
  }

  return <form className="w-full flex flex-col lg:flex-row gap-2 p-4 rounded-[16px] justify-between items-center">
    <label className="block w-full lg:w-2/3 h-14 max-w-[700px]">
      <input className="hero__form__input w-full h-full block p-4" 
             value={websiteName}
             onChange={(e) => { setWebsiteName(e.target.value); }} 
             placeholder="Your website..." />
    </label>
    <button className="flex justify-center items-center gap-3 w-full lg:w-1/3 max-w-[700px] h-14 background-primary text-white rounded-full lg:rounded-l-xl lg:rounded-r-[32px] py-3 px-8 text-lg font-bold">
      Get started
      <Image src="/button-arrow.svg" 
             width={20}
             height={20}
             alt="get-started" />
    </button>
  </form>
}
"use client";

import { useState } from 'react';
import Input from './Input.tsx';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    
  }
  
  return <form className="login__form w-full p-8 lg:p-12 my-8 flex flex-col justify-end items-end">
    <Input value={email} 
      setValue={(e) => { setEmail(e.target.value); }}
      placeholder='Email'
      type='email' />

    <Input value={password} 
      setValue={(e) => { setPassword(e.target.value); }}
      placeholder='Password'
      type='password' />

    <button onClick={handleSubmit}
      className="btn text-white flex justify-center items-center gap-3 font-bold w-full max-w-[158px] h-[52px] rounded-full bg-[#E50013] mt-4">
      Login

      <Image
        src="/button-arrow.svg"
        width={24}
        height={24}
        alt="get-started"
      />
    </button>
  </form>
}
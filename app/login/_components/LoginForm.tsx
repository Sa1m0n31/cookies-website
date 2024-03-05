"use client";

import { useState, useRef, useEffect } from 'react';
import Input from './Input';
import Image from 'next/image';

export default function LoginForm() {
  const errorRef = useRef(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState('');

  useEffect(() => {
    if(errorRef?.current) {
      if(error) {
        errorRef.current.style.opacity = '1';
        errorRef.current.style.transform = 'translate(-50%, 0)';

        setTimeout(() => {
          setError('');
        }, 3000);
      }
      else {
        errorRef.current.style.opacity = '0';
        errorRef.current.style.transform = 'translate(-50%, 1rem)';
      }
    }
  }, [error, errorRef]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email) {
      setError('Fill email field');
    }
    else if(!validateEmail(email)) {
      setError('Type proper email address');
    }
    else if(!password) {
      setError('Fill password field');
    }
    else {
      // Submit form
    }
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

    <p ref={errorRef}
      className="bg-[#E50013] text-white py-3 px-4 lg:px-6 text-center font-bold fixed left-1/2 bottom-10 -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 z-40 rounded-2xl text-sm lg:text-normal">
      {error}
    </p>
  </form>
}

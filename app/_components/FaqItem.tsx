import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface FaqItemProps {
  index: number,
  question: string,
  answer: string,
  questionOpen: number,
  setQuestionOpen: Function
}

export default function FaqItem({index, question, answer, questionOpen, setQuestionOpen}: FaqItemProps) {
  const minusImage = useRef(null);
  const plusImage = useRef(null);
  const questionElementWrapper = useRef(null);
  const questionElement = useRef(null);
  const faqElement = useRef(null);

  useEffect(() => {
    if(questionOpen === index) {
      showQuestion();
    }
    else {
      hideQuestion();
    }
  }, [index, questionOpen]);

  const showQuestion = () => {
    plusImage.current.style.visibility = 'hidden';
    minusImage.current.style.visibility = 'visible';

    questionElementWrapper.current.style.height = `${questionElement.current.clientHeight}px`;

    setTimeout(() => {
      questionElement.current.style.opacity = '1';
      faqElement.current.style.boxShadow = '0px 4px 24px rgba(0, 0, 0, 0.02)';
      faqElement.current.style.background = '#fff';
    }, 350);
  }

  const hideQuestion = () => {
    minusImage.current.style.visibility = 'hidden';
    plusImage.current.style.visibility = 'visible';

    questionElement.current.style.opacity = '0';
    faqElement.current.style.boxShadow = 'none';
    faqElement.current.style.background = 'transparent';

    setTimeout(() => {
      questionElementWrapper.current.style.height = '0';
    }, 350);
  }

  const toggleQuestion = () => {
    setQuestionOpen((prevState) => {
      if(prevState === index) {
        return -1;
      }
      else {
        return index;
      }
    });
  }

  return <div ref={faqElement} className="w-full p-8 transparent transition-all duration-300 rounded-xl">
    <button onClick={toggleQuestion}
      className="w-full flex justify-between items-center transparent">
      <h6 className="text-xl lg:text-2xl font-extrabold text-left">
        {question}
      </h6>

      <div className="w-6 h-6 min-w-6 min-h-6 relative shrink-0 ml-4">
        <Image className="invisible absolute top-0 left-0 w-full min-w-6"
          ref={minusImage}
          src="/minus.svg"
          width={24}
          height={24}
          alt="minus" />
        <Image className="invisible absolute top-0 left-0 w-full min-w-6"
          ref={plusImage}
          src="/plus.svg"
          width={24}
          height={24}
          alt="plus" />
      </div>
    </button>

    <div ref={questionElementWrapper} className="transition-all duration-300 h-0 overflow-hidden">
      <p ref={questionElement}
        className="text-[#5B5B5B] w-full pt-4 text-lg font-medium leading-8 overflow-hidden origin-top-left transition-all duration-300 opacity-0">
        {answer}
      </p>
    </div>
  </div>
}

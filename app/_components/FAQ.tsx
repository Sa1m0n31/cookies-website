"use client";

import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { questions } from '../_static/content';

export default function FAQ() {
  const [questionOpen, setQuestionOpen] = useState(0);

  return <section className="w-11/12 max-w-[1320px] bg-[#FBFBFB] py-10 lg:py-20 px-4 lg:px-0 mx-auto mb-20 mt-0 lg:mb-40 rounded-3xl relative z-20"
                  id="faq">
    <div className="max-w-4xl mx-auto">
      <h5 className="text-3xl lg:text-4xl font-extrabold mb-10 text-center lg:text-left">
        Frequently Asked Questions
      </h5>

      {questions.map((item, index) => {
        const { question, answer } = item;

        return <React.Fragment key={index}>
          <FaqItem index={index}
                   questionOpen={questionOpen}
                   setQuestionOpen={setQuestionOpen}
                   question={question}
                   answer={answer} />
        </React.Fragment>
      })}
    </div>
  </section>
}

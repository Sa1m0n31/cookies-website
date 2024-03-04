import React, { useState } from 'react';
import FaqItem from './FaqItem';

const questions = [
  {
    question: 'Etiam risus urna odio donec tellus massa nec dis?',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Neque justo volutpat eleifend elementum.',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Orci amet quam augue tellus viverra ante.',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Amet lacus dictum id nisi volutpat',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Et proin vel tellus mauris est aliquam',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  }
]

export default function FAQ() {
  const [questionOpen, setQuestionOpen] = useState(0);
  
  return <section className="w-11/12 max-w-[1320px] bg-[#FBFBFB] py-10 lg:py-20 px-4 lg:px-0 mx-auto mb-20 mt-0 lg:my-40 rounded-4xl relative z-20">
    <div className="max-w-4xl mx-auto">
      <h5 className="text-3xl lg:text-4xl font-extrabold mb-10 text-center lg:text-left">
        Frequently Asked Questions
      </h5>

      {questions.map((item, index) => {
        const { question, answer } = item;
    
        return <FaqItem index={index} 
                        questionOpen={questionOpen}
                        setQuestionOpen={setQuestionOpen}
                        question={question} 
                        answer={answer} />
      })}
    </div>
  </section>
}
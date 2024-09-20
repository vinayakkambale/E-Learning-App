import React, { useState } from 'react';
import FAQSheder from "../FAQS/FAQSheder"
import FAQ from './FAQ';
import './faq.css'

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.',
      open: true
    },
    {
      question: 'What are the key features of React?',
      answer: 'The key features of React include component-based architecture, virtual DOM, JSX syntax, and one-way data flow.',
      open: false
    },
    {
      question: 'How do you install React?',
      answer: 'You can install React using npm or yarn. For example, you can run `npm install react react-dom` or `yarn add react react-dom`.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <FAQSheder />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
import React from "react";

import Faq from "./Faq.js";
import { FaqContainer, StyledFaqsList, FaqIcon } from "./FaqsElements";
import faqImage from "./assets/faq-box.svg";

// this data could come from anywhere
const faqsData = [
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question",
  },
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question",
  },
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question",
  },
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question",
  },
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question",
  },
  {
    question: "Do i have to pay to participate in the event?",
    answer: "Frequently Asked Question. Frequently Asked Question. Frequently Asked Question. Frequently Asked Question. Frequently Asked Question. Frequently Asked Question. Frequently Asked Question. Frequently Asked Question",
  },
];

const FaqsList = () => {
  return (
    <FaqContainer id="faqs">
      <FaqIcon>
        <img src={faqImage} alt="FAQs" />
      </FaqIcon>
      <StyledFaqsList>
        {faqsData.map((faq, i) => (
          <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
        ))}
      </StyledFaqsList>
    </FaqContainer>
  );
};

export default FaqsList;

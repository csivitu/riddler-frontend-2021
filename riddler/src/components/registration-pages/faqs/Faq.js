import React, { useState } from "react";

import { StyledFaq } from "./FaqsElements";
import plusSymbol from "./assets/plus.svg";

const Faq = props => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);

  return (
    <StyledFaq isOpen={isOpen}>
        <span className="faq-question">
          {question}
          <span className="plus" onClick={() => toggleOpen(!isOpen)}>
            <img src={plusSymbol} alt='plus'/>
          </span>
        </span>

        <span className="faq-answer">
          {answer}
        </span>
    </StyledFaq>
  );
};

export default Faq;
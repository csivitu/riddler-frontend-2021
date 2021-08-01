import React from "react";

import Faq from "./Faq.js";
import { FaqContainer, StyledFaqsList, FaqIcon } from "./FaqsElements";
import faqImage from "./assets/faq-box.svg";

// this data could come from anywhere
const faqsData = [
  {
    question: "Can I participate in a team?",
    answer: "No, Riddler 2021 is a single player event and the prize money will be awarded to one person only. But Jesus is watching.",
  },
  {
    question: "Will participants with technical skills have an edge over others?",
    answer: "Nope, plain and simple. Riddler is not a technical event. It’s about how thoroughly you can find stuff from the depth of the interwebs to decode the questions at hand. Technical skills won’t save you in these gruelling 72 hours.",
  },
  {
    question: "Is it all day long?",
    answer: "Yes. After the timer starts on the 20th at 10 am, the event will progress(barring any unforeseen event) for the following 72 hours continuously.",
  },
  {
    question: "Can I participate from my phone?",
    answer: "You can register from your phone. But to enjoy Riddler 2021 in all its glory, it is advised to use the desktop version of the website.",
  },
  {
    question: "Are we allowed to use Google?",
    answer: "YES! The whole premise of the game is to find answers for the deceptively cryptic questions from the Internet and who better to ask for help than good ol’ Google.",
  },
  {
    question: "What kind of questions can I expect?",
    answer: "You can check out these posts on our Instagram page and see some questions from the past version of riddler to get a better idea of how the game works and also understand why it has never been beaten :)",
  },
  {
    question: "Is it a paid event?/Is there a registration fee?/Do I have to pay to participate?",
    answer: "Nada. Riddler is completely free for everyone to participate. The only thing you’ll have to invest is your ‘time’ :)",
  },
  {
    question: "How long is the event?",
    answer: "Riddler 2021 is 72 hours long.",
  },
  {
    question: "Is there an eligibility criteria to participate in the event?",
    answer: "Anyone with a registered CSI-VIT account can participate in Riddler 2021. The details about the registration process will be included in the website.",
  },
  {
    question: "Where will I get the updates about the event?",
    answer: "Follow our Instagram page @csivitu to stay up to date with everything Riddler.",
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

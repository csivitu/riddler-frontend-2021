import styled from "styled-components";

export const FaqContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(219, 244, 41, 1);
`;

export const FaqIcon = styled.div`
  width: 200px;
  margin: 15px 0px;

  img {
    width: 100%;
  }
`;

export const StyledFaq = styled.div`
  height: max-content;
  margin: 10px 0px;
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .faq-question {
    font-size: 16px;
    font-weight: 600;
    margin-right: 20px;
  }

  .plus {
    position: absolute;
    cursor: pointer;
    right: 0;

    img {
      height: 18px;
      transition: transform 0.2s;
      transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
    }
  }

  .faq-answer {
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    /* height: fit-content; */
    height: ${({ isOpen }) => (isOpen ? "40px" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    font-size: 14px;
    padding: 5px 10px;
  }
`;

export const StyledFaqsList = styled.div`
  width: 95%;
`;

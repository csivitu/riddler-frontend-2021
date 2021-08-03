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
  width: 250px;
  align-self: flex-end;
  margin-inline-end: 1.5rem;
  margin: 2% 4% 3%;
  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
  }

  @media screen and (max-width: 400px) {
    width: 100px;
  }

  @media screen and (max-width: 320px) {

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
    padding-right: 20px;
    position: relative;
  }

  .plus {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 18px;
      transition: transform 0.2s;
      transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
    }
  }

  .faq-answer {
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    /* height: fit-content; */
    height: ${({ isOpen }) => (isOpen ? "50px" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    font-size: 14px;
    padding: 5px 10px;

    @media screen and (max-width: 900px) {
      height: ${({ isOpen }) => (isOpen ? "60px" : "0")};
    }

    @media screen and (max-width: 600px) {
      height: ${({ isOpen }) => (isOpen ? "80px" : "0")};
    }

    @media screen and (max-width: 400px) {
      height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
    }

    @media screen and (max-width: 320px) {
      height: ${({ isOpen }) => (isOpen ? "110px" : "0")};
    }
  }
`;

export const StyledFaqsList = styled.div`
  width: 95%;
`;

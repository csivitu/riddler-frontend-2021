import styled from "styled-components";
import Brice from "./assets/Brice-Bold.otf";

export const FaqContainer = styled.div`
  @font-face {
    font-family: Ligconsolata;
    src: url("ligconsolata.ttf");
  }
  font-family: Ligconsolata;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #dbf429;
`;

export const FaqHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const FaqIcon = styled.div`
  width: 20rem;
  align-self: flex-end;
  display: inline-block;
  margin-inline-end: 1.5rem;
  margin: 2% 4% 3%;
  filter: drop-shadow(-20px 20px 10px rgba(0, 0, 0, 0.25));

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 17rem;
  }

  @media screen and (max-width: 700px) {
    width: 10rem;
    filter: drop-shadow(-15px 15px 8px rgba(0, 0, 0, 0.25));
  }

  @media screen and (max-width: 500px) {
    width: 8rem;
    filter: drop-shadow(-10px 10px 5px rgba(0, 0, 0, 0.25));
  }

  @media screen and (max-width: 350px) {
    width: 7rem;
    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.25));
  }
`;

export const FaqTitle = styled.div`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }

  font-family: Brice;
  font-size: 4rem;
  font-weight: 600;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const StyledFaq = styled.div`
  height: max-content;
  margin: 10px 0px;
  border-top: 2px solid black;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .faq-question {
    font-size: 16px;
    font-weight: 600;
    padding-right: 20px;
    padding-left: 5px;
    position: relative;
    padding-bottom: 5px;
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
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    height: ${({ isOpen }) => (isOpen ? "60px" : "0")};
    overflow: hidden;
    font-size: 14px;
    padding: ${({ isOpen }) => (isOpen ? "5px 10px" : "0px 10px")};

    @media screen and (max-width: 900px) {
      height: ${({ isOpen }) => (isOpen ? "70px" : "0")};
    }

    @media screen and (max-width: 600px) {
      height: ${({ isOpen }) => (isOpen ? "90px" : "0")};
    }

    @media screen and (max-width: 450px) {
      height: ${({ isOpen }) => (isOpen ? "120px" : "0")};
    }

    @media screen and (max-width: 350px) {
      height: ${({ isOpen }) => (isOpen ? "130px" : "0")};
    }

    @media screen and (max-width: 320px) {
      height: ${({ isOpen }) => (isOpen ? "150px" : "0")};
    }
  }
`;

export const StyledFaqsList = styled.div`
  width: 80%;
  border-bottom: 2px solid black;
  margin-bottom: 10px;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

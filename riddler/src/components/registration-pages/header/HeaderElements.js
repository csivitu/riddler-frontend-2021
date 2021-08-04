import styled  from "styled-components";
import Brice from "./assets/Brice-Bold.otf";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  color: ${({ titleColor }) => titleColor};
  z-index: 2;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const Icon = styled.div`
  width: 20rem;
  align-self: flex-end;
  display: inline-block;
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

export const Title = styled.div`
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
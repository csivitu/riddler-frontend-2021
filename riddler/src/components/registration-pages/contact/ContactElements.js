import styled from "styled-components";
import Brice from "./assets/Brice-Regular.otf";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  position: relative;
  z-index: -1;
  text-align: center;

  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
`;
export const FooterHeading = styled.div`
  width: 200px;
  margin: 15px 0px;

  img {
    width: 100%;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-family: "Poppins" sans-serif;
  margin: 0;
  margin-bottom: 0;
`;

export const Left = styled.div`
  text-align: left;
  width: 50%;
  margin-bottom: 5%;
`;

export const Right = styled.div`
  text-align: left;
  width: 30%;
  margin-bottom: 5%;
  font-size: 4rem;
`;
export const AboutH2 = styled.h2`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }
  color: rgba(219, 244, 41, 1);
  z-index: 2;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  width: 80%;

  line-height: 3rem;
  font-family: Brice;

  @media screen and (max-width: 1100px) {
    width: 60%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 650px) {
    width: 90%;
    font-size: 1rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const LLine1 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftP = styled.p`
  font-family: montserrat;
  color: white;
  width: 80%;
`;
export const LeftA = styled.a`
  font-family: montserrat;
  text-decoration: none;
  color: rgba(219, 244, 41, 1);
  font-size: 1rem;
  font-style: italic;
  &:hover {
    color: white;
    opacity: 0.7;
  }
`;

export const ContactP = styled.p`
  font-family: montserrat;
  color: white;
  font-size: 1rem;
  margin-bottom: 0;
`;
export const Social = styled.div`
  margin-bottom: 1rem;
`;

export const Sociallogos = styled.div`
  color: white;
  padding: 2px;
  margin: 0;
  // font-size: 6rem;
  text-align: center;
`;
export const Logo = styled.img`
  height: 2rem;
`;

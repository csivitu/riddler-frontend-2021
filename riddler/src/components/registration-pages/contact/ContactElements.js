import styled from "styled-components";
import Brice from "./assets/Brice-Regular.otf";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;

  @media screen and (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const FooterHeading = styled.div`
  width: 200px;
  margin: 20px 0px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 180px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5%;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    align-items: center;
  }
`;

export const Left = styled.div`
  text-align: left;
  width: 40%;

  @media screen and (max-width: 400px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const Right = styled.div`
  text-align: left;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 700px) {
    width: 40%;
  }

  @media screen and (max-width: 400px) {
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
  }
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
  margin-bottom: 1rem;
  font-family: "Brice";

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const LeftP = styled.p`
  color: rgba(229, 229, 229, 1);
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const LeftA = styled.a`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: rgba(219, 244, 41, 1);
  font-size: 1rem;
  font-style: italic;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-bottom: 15px;

  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;

export const ContactP = styled.p`
  font-family: "Montserrat", sans-serif;
  color: rgba(229, 229, 229, 1);
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ContactA = styled.a`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-style: italic;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sociallogos = styled.div`
  color: white;
  margin: 0;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const FooterLogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: fit-content;

  .riddler-logo {
    padding-right: 20px;
  }

  .csi-logo {
    padding-left: 20px;
    border-left: 5px solid rgba(219, 244, 41, 1);
  }

  @media screen and (max-width: 1000px) {
    width: 60%;
  }

  @media screen and (max-width: 800px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 50%;
`;

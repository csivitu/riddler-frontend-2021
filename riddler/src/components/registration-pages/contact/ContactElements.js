import styled from "styled-components";
import Brice from "./assets/Brice-Regular.otf";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  @font-face {
    font-family: Ligconsolata;
    src: url("ligconsolata.ttf");
  }
  font-family: Ligconsolata;

  position: relative;
  min-height: calc(100vh - 80px);
  background: url(bg_pattern.svg) no-repeat center center;
  background-color: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .Wave1 {
    transform: rotate(180deg);
    z-index: 1;
  }

  .Wave1 svg {
    display: block;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 0;
  }
`;

export const FooterHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  z-index: 1;

  @media screen and (max-width: 700px) {
    width: 85%;
  }

  @media screen and (max-width: 350px) {
    width: 90%;
  }
`;

export const ContactIcon = styled.div`
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

export const ContactTitle = styled.div`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }

  color: #dbf429;
  font-family: Brice;
  font-size: 5rem;
  font-weight: 700;
  text-align: right;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.5rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  box-sizing: border-box;
  margin: 5% 10%;
  z-index: 1;

  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 5% 5%;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  text-align: left;
  width: 50%;

  @media screen and (max-width: 400px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const Right = styled.div`
  text-align: right;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5%;

  @media screen and (max-width: 400px) {
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    text-align: left;
    margin-left: 0;
  }
`;

export const AboutH2 = styled.h2`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }

  color: rgba(219, 244, 41, 1);
  z-index: 2;
  font-weight: 700;
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
  font-size: 1.2rem;
  letter-spacing: 1%;
  line-height: 120%;
  font-family: Ligconsolata;
  margin-bottom: 1rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const LeftA = styled.a`
  font-family: Ligconsolata;
  text-decoration: none;
  color: rgba(219, 244, 41, 1);
  font-size: 1.2rem;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);

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
  font-weight: 700;

  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;

export const ContactP = styled.p`
  font-family: Ligconsolata;
  color: rgba(229, 229, 229, 1);
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ContactA = styled.a`
  font-family: Ligconsolata;
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;

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

  @media screen and (max-width: 350px) {
    width: 40%;
  }
`;

export const Sociallogos = styled.div`
  color: white;
  margin: 0;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  padding: 0.4rem;

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
  margin-bottom: 50px;
  z-index: 1;

  .riddler-logo {
    padding-left: 20px;
    border-left: 2px solid rgba(219, 244, 41, 1);
  }

  .csi-logo {
    padding-right: 20px;
    width: 35%;
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

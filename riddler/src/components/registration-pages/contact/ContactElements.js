import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;
  z-index: -1;
  text-align: center;
`;
export const FooterHeading = styled.div`
  position: relative;
  display: block;
  width: 100%;
  justify-content: center;
  font-family: Avara-Black;
  background: linear-gradient(
    to right,
    rgba(215, 167, 134, 1),
    rgba(108, 77, 59, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10rem;
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
  color: white;
  margin-left: 3rem;
  font-family: "Poppins" sans-serif;
  font-weight: bold;
  font-size: 3rem;
`;

export const LLine1 = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftP = styled.p`
  margin-left: 4rem;
  font-family: "Poppins" sans-serif;
  color: white;
  font-size: 2rem;
`;
export const LeftA = styled.a`
  margin-left: 4rem;
  font-family: "Poppins" sans-serif;
  color: white;
  font-size: 2rem;
  font-style: italic;
  :hover {
    color: white;
    opacity: 0.7;
  }
`;

export const ContactP = styled.p`
  margin-left: 4rem;
  font-family: "Poppins" sans-serif;
  color: white;
  font-size: 2rem;
  margin-bottom: 0;
`;
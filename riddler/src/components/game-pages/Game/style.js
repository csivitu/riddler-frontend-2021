import styled from "styled-components";

export const GameContainer = styled.div`
  background-color: black;
  overflow-x: hidden;
  color: white;
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const RiddlerLogo = styled.img`
  height: 8rem;
  margin-bottom: 2rem;
  pointer-events: none;
  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    padding: 0 15px;
    cursor: pointer;
    width: 10rem;
  }
  
  @media screen and (max-width: 700px) {

    img {
      width: 8rem;
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 500px) {
    img {
      width: 6rem;
    }
  }
`;

export const Checkers = styled.img`
  width: 100vw;
  position: absolute;
  z-index:1;

  @media screen and (max-width: 700px) {
    width: 130vw;
  }

  @media screen and (max-width: 500px) {
    width: 160vw;
  }

  @media screen and (max-width: 500px) {
    width: 200vw;
  }
`;

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

  svg {
    width: 1em;
  }
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
  z-index: 5;

  div {
    cursor: pointer;
  }

  img {
    padding: 0 15px;
    cursor: pointer;
    width: 10rem;
    pointer-events: none;
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

export const GifImage = styled.img`
  position: absolute;
  width: 65rem;
  transform: translateY(-1rem);
  z-index: 0;
  pointer-events: none;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
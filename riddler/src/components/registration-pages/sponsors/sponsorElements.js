import styled from "styled-components";

export const SponsorContainer = styled.div`
  @font-face {
    font-family: Ligconsolata;
    src: url("ligconsolata.ttf");
  }
  font-family: Ligconsolata;
  padding-bottom: 15rem;
  position: relative;
  min-height: calc(100vh - 80px);
  background: url(bg_pattern_bigger.png) no-repeat center center;
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

export const SponsorsWrap = styled.div`
margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  z-index: 5;
  justify-content: center;
  gap: 3rem;
`;

export const SponsorsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const SponsorsBox = styled.div`
  height: 15rem;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbf429;
  box-shadow: -0.75rem 0.75rem #FE3176;

  img {
    width: 15rem;
  }

  @media screen and (max-width: 500px) {
    width: 80vw;
    height: 12rem;
    img {
      width: 10rem;
    }
  }
`;

export const SponsorsBox2 = styled.div`
  height: 15rem;
  width: 25rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background-color: #dbf429;
  box-shadow: -0.75rem 0.75rem #FE3176;

  img {
    width: 5rem;
  }

  @media screen and (max-width: 500px) {
    width: 80vw;
    height: 12rem;
    img {
      width: 3.5rem;
    }
  }
`;

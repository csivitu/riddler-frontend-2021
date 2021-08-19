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
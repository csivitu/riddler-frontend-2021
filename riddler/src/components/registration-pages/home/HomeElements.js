import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const HomeContainer = styled.div`
background-color: black;
  background-image: url("bg_pattern.svg");
  background-position: bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
  :before{
      content:'';
      position:absolute;
      top: 0;
      left: 0;right: 0;
      bottom:0;
  }
`;

export const AboutBg = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    
    .Wave1 {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 25%;
    }

    .Wave2 {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 80%;
    }
`;

export const HomeBG = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RiddlerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: max-content;
  position: relative;

  img {
    width: 100%;
  }

  .shadow {
    position: absolute;
    z-index: -1;
    filter: drop-shadow(4px 4px 1px rgba(255, 255, 255, 1));
  }

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
`;

export const Button = styled(LinkRoute)`
  border-radius: 30px;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 6px solid rgba(254, 49, 118, 1);
  background: #DBF429;
  display: inline-block;
  position: relative;

  &:hover {
    top: 4px;
    border-bottom: 4px solid rgba(254, 49, 118, 1);
  }

  &:active {
    top: 6px;
    border: none;
  }
`;

import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const HomeContainer = styled.div`
  background: #0c0c0c;
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
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
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
  color: #000000;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 6px solid rgba(254, 49, 118, 1);
  background: rgba(219, 244, 41, 1);
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

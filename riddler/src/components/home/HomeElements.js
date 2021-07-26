import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 580px;
  position: relative;
  z-index: 1;
  :before{
      content:'';
      position:absolute;
      top: 0;
      left: 0;right: 0;
      bottom:0;
      z-index;
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
  padding: 8px 24px;
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: #ffffff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: rgba(219, 244, 41, 1);
    color: #000000;
  }
`;

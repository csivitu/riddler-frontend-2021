import styled from "styled-components";
import Brice from "./assets/Brice-Bold.otf";
import { Link as LinkRoute } from "react-router-dom";

export const QContainer = styled.div`
  background-color: black;
  overflow-x: hidden;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TrackBox = styled.div`
  display: flex;
  float: left;
  color: black;
  margin: 0.5rem 5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #dbf429;
`;
export const Trackname = styled.h3`
  @font-face {
    font-family: Brice;
    src: url(${Brice}) format("truetype");
  }
  font-family: Brice;
  text-transform: uppercase;
`;

export const QuestionBox = styled.div`
  border: 2px solid #dbf429;
  background-color: black;
  color: white;
  padding: 2rem;
  margin: 2rem 5rem;
  border-radius: 7px;
`;
export const QBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  // width: 3rem;
  // height: 6rem;
  float: right;
  justify-content: space-between;
  z-index: 1000;
  position:relative;
  bottom:1rem;
  right:1rem;
  IconButton {
    
  }
`;
export const QuestionContent = styled.p`
  font-family: Poppins;
  line-height: 3;
`;
export const Hint = styled.p`
  font-family: Poppins;
  line-height: 2;
`;
export const AnswerBox = styled.input`
  border: 2px solid #dbf429;
  background-color: black;
  color: white;
  padding: 1rem;
  margin: 0rem;
  max-width: 40rem;
  border-radius: 7px;
  width: 40rem;
  ::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const AContainer = styled.div`
  display: flex;
  flex-direction: row;
  // width:100%;
  margin: 0rem 5rem;
`;
export const OurButton = styled(LinkRoute)`
  border-radius: 30px;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  margin: 0 1rem;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 6px solid rgba(254, 49, 118, 1);
  background: #dbf429;
  display: inline-block;
  position: relative;
  font-family: Ligconsolata;

  &:hover {
    top: 4px;
    border-bottom: 4px solid rgba(254, 49, 118, 1);
  }

  &:active {
    top: 6px;
    border: none;
  }
`;

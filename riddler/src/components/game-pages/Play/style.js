import styled from "styled-components";
import Brice from "./assets/Brice-Bold.otf";
import { Link as LinkRoute } from "react-router-dom";

export const QContainer = styled.div`
  background-color: black;
  overflow-x: hidden;
  color: white;
  min-height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

  #map-loading {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: 30px;
    height: 100px;
    width: 100px;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
  }

  .MuiCircularProgress-root {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
  }

  #darken {
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 3rem;
  // height:10%;
  @media screen and (max-width: 350px) {
    margin: 1rem;
    justify-content: center;
    align-items: center;
  }
  // width:80vw;

  // width:90%;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const QBtnContainer = styled.div`
  display: flex;
  float: right;
  justify-content: space-evenly;
  padding: 0rem;
  button {
    padding: 0rem;
  }
  img {
    width: 100%;
  }
`;
export const TrackBox = styled.div`
  display: flex;
  float: left;
  color: black;
  padding: 1rem;
  // width:fit-content;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: #dbf429;
  @media screen and (max-width: 600px) {
    font-size: 90%;
  }
  @media screen and (max-width: 490px) {
    font-size: 80%;
    padding: 0.5rem;
  }
  @media screen and (max-width: 435px) {
    font-size: 75%;
    padding: 0.45rem;
  }
  @media screen and (max-width: 414px) {
    font-size: 70%;
    padding: 0.4rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 67.5%;
    padding: 0.35rem;
  }
  @media screen and (max-width: 370px) {
    font-size: 65%;
    padding: 0.3rem;
  }
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
  border-radius: 7px;
  max-height: 60%;
  width:100%;
  overflow: scroll;
  display: flex;
  @media screen and (max-width: 414px) {
    height: 65%;
  }
  @media screen and (max-width: 380px) {
    // font-size: 70%;
    height: 60%;
  }

  @media screen and (max-width: 350px) {
    // font-size: 68%;
    padding: 1.5rem;
    height: 50%;
  }
`;

export const QuestionContent = styled.p`
  font-family: Poppins;
  line-height: 3;

  a {
    color:white;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: max-content;
  position: relative;

  img {
    width: 80%;
  }

  @media screen and (max-width: 750px) {
    width: 70%;
  }
`;
export const Hint = styled.p`
  font-family: Poppins;
  line-height: 2;
`;
export const AContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // padding:1rem;
  margin-top: 1rem;
  @media screen and (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
    height: 10%;
  }
`;
export const AnswerBox = styled.input`
  border: 2px solid #dbf429;
  background-color: black;
  color: white;
  padding: 1rem;
  // width: 1rem;
  flex-grow: 2;

  border-radius: 7px;
  ::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  // padding:1rem;
  @media screen and (max-width: 350px) {
    margin-top: 1rem;
  }
`;

export const OurButton = styled(LinkRoute)`
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



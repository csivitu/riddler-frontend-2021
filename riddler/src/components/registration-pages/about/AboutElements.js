import styled from "styled-components";
import Brice from './assets/Brice.otf';
import briceBold from './assets/Brice-Bold.otf';
import newFont from './assets/Inconsolata.ttf'

export const AboutContainer = styled.div`
    height: calc(100vh - 80px); 
    width: 100%;
    background-color: black;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const AboutBox = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 20rem;
    transform: rotate(45deg);
    
    img{
        width: 100%;
    }

    @media screen and (max-width: 700px) {
        width: 15rem;
        top: 2rem;
    }

    @media screen and (max-width: 450px) {
        width: 12rem;
        top: 4rem;
    }
`;

export const AboutBg = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("bg_pattern.svg");
    background-color: black;
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
        height: 75%;
    }
`;

export const Heading = styled.div`
    @font-face {
        font-family: 'Brice-Bold';
        src: url(${briceBold}) format('truetype');
    }

    z-index: 2;
    margin-left: 4rem;
    margin-top: 3rem;
    font-weight: 600;
    font-size: 6rem;
    letter-spacing: 0.05rem;
    width: 50%;
    color: #D8F029;
    text-align: left;
    line-height: 2.5rem;
    font-family: Brice;

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 900px) {
        width: 70%;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
        font-size: 1rem;
        line-height: 2rem;
    }

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

export const AboutText = styled.p`
    @font-face {
        font-family: 'Ligconsolata';
        src: url(${newFont}) format('truetype');
    }

    z-index: 2;
    margin-left: 4rem;
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    width: 50%;
    color: white;
    text-align: left;
    line-height: 2.5rem;
    font-family: Brice;

    @media screen and (max-width: 1100px) {
        width: 50%;
    }

    @media screen and (max-width: 900px) {
        width: 70%;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
        font-size: 1rem;
        line-height: 2rem;
    }

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

export const RiddlerBox = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    width: 20rem;

    img{
        width: 100%;
    }

    @media screen and (max-width: 900px) {
        bottom: 1rem;
    }

    @media screen and (max-width: 700px) {
        width: 15rem;
    }

    @media screen and (max-width: 450px) {
        width: 12rem;
    }
`;
import styled from "styled-components";
import Brice from './assets/Brice.otf';

export const AboutContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    background-color: rgba(254, 49, 118, 1);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutBox = styled.div`
    position: absolute;
    top: 2rem;
    left: 5rem;
    width: 20%;
    
    img{
        width: 100%;
    }
`;

export const AboutBg = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

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

export const AboutText = styled.p`
    @font-face {
        font-family: Brice;
        src: url(${Brice}) format('truetype');
    }

    z-index: 10;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    width: 40%;
    text-align: center;
    line-height: 3rem;
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
    bottom: 4rem;
    right: 1rem;

    img{
        width: 20rem;
    }
`;
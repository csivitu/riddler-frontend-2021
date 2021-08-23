import React from "react";
import aboutBoxImage from "./assets/spons-box.svg";
import Header from "../header/Header";
import Wave from "react-wavify";
import { SponsorContainer, SponsorsBox, SponsorsBox2, SponsorsCard, SponsorsWrap } from "./sponsorElements";
import cloudsek from "./assets/cloudsek.png";
import figma from "./assets/figma.png";
import gfg from "./assets/gfg.png";
import hoverrobotix from "./assets/hoverrobotix.png";
import mentorx from "./assets/mentorx.png";
import perficient from "./assets/perficient.png";
import replit from "./assets/replit.png";
import sketch from "./assets/sketch.png";
import "./styles.css";

const Sponsors = () => {
  return (
    <SponsorContainer id="sponsors">
      <Wave
        className="Wave1"
        fill="#DBF429"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.25,
          points: 3,
        }}
      />
      <Header
        TitleTextTop="Meet our"
        TitleTextBottom="sponsors"
        TitleColor="#D8F029"
        ImageURL={aboutBoxImage}
        Opposite="true"
      />

      <SponsorsWrap>
        <SponsorsCard>
            <h1>TITLE SPONSOR</h1>
            <SponsorsBox>
                <a href="https://cloudsek.com/" target="_blank" rel="noreferrer"><img src={cloudsek} alt="CloudSEK" /></a>
            </SponsorsBox>
        </SponsorsCard>
        <SponsorsCard>
            <h1>CO-SPONSOR</h1>
            <SponsorsBox>
            <a href="https://www.perficient.com/" target="_blank" rel="noreferrer"><img src={perficient} alt="perficient" /></a>
            </SponsorsBox>
        </SponsorsCard>
        <SponsorsCard>
            <h1>COLLABORATORS</h1>
            <SponsorsBox2>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src={figma} alt="figma" /></a>
            <a href="https://thementorx.com/" target="_blank" rel="noreferrer"><img src={mentorx} alt="mentorx" /></a>
            <a href="https://www.sketch.com/" target="_blank" rel="noreferrer"><img src={sketch} alt="sketch" /></a>
            <a href="https://hoverrobotix.com/" target="_blank" rel="noreferrer"><img src={hoverrobotix} alt="hoverrobotix" /></a>
            <a href="https://www.geeksforgeeks.com/" target="_blank" rel="noreferrer"><img src={gfg} alt="gfg" /></a>
            <a href="https://replit.com/" target="_blank" rel="noreferrer"><img src={replit} alt="replit" /></a>
            </SponsorsBox2>
        </SponsorsCard>
      </SponsorsWrap>
    </SponsorContainer>
  );
};

export default Sponsors;

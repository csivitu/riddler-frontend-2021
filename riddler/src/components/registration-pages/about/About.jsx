import React from "react";
import Wave from "react-wavify";
import {
  AboutBg,
  AboutBox,
  AboutContainer,
  AboutText,
  RiddlerBox,
} from "./AboutElements";

import aboutBoxImage from "./assets/about-box.svg";
import riddlerBoxImage from "./assets/riddler-box.svg";

const About = ({ toggle }) => {
  return (
    <>
      <AboutContainer id="about">
        <AboutBg>
          <Wave
            className="Wave2"
            fill="#DBF429"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 3,
            }}
          />
          <Wave
            className="Wave1"
            fill="#1C1CD2"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.25,
              points: 3,
            }}
          />
        </AboutBg>
        <AboutBox>
          <img src={aboutBoxImage} alt="About"></img>
        </AboutBox>
        <AboutText>
          Riddler is a one-of-a-kind online cryptic hunt where players dive into
          the depths of the internet and navigate their way to the top of the
          leaderboard by cracking exhilarating riddles spread across various
          themes.
        </AboutText>
        <RiddlerBox>
          <img src={riddlerBoxImage} alt="About"></img>
        </RiddlerBox>
      </AboutContainer>
    </>
  );
};

export default About;

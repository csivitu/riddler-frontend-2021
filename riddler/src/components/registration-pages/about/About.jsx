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
          Riddler is an online cryptic hunt, organized every year by the
          Computer Society Of India, VIT Student Chapter
        </AboutText>
        <RiddlerBox>
          <img src={riddlerBoxImage} alt="About"></img>
        </RiddlerBox>
      </AboutContainer>
    </>
  );
};

export default About;

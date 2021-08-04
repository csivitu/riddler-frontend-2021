import React from "react";
import Wave from "react-wavify";
import {
  AboutBg,
  // AboutBox,
  AboutContainer,
  AboutText,
  // RiddlerBox,
  // Heading,
  Yellow,
} from "./AboutElements";

import aboutBoxImage from "./assets/about-box.svg";
import Header from "../header/Header";
// import riddlerBoxImage from "./assets/riddler-box.svg";

const About = ({ toggle }) => {
  return (
    <>
      <AboutContainer id="about">
        <AboutBg>
          {/* <Wave
            className="Wave2"
            fill=""
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.15,
              points: 3,
            }}
          /> */}
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
        </AboutBg>

        <Header
          TitleTextTop="What's in"
          TitleTextBottom="store"
          TitleColor="#D8F029"
          ImageURL={aboutBoxImage}
          Opposite="false"
        />
        <AboutText>
          Riddler is a <Yellow>one-of-a-kind</Yellow> online cryptic hunt where
          players dive into the depths of the internet and navigate their way to
          the top of the leaderboard by cracking{" "}
          <Yellow>exhilarating riddles</Yellow> spread across various themes.
          The last 9 years have seen hundreds try their best every season, only
          to get bested themselves.
        </AboutText>
      </AboutContainer>
    </>
  );
};

export default About;

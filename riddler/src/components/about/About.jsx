import React from "react";

import aboutBoxImage from './assets/about-box.svg';
import riddlerBoxImage from './assets/riddler-box.svg';

const About = ({ toggle }) => {
  return (
    <>
        <AboutContainer>
            <AboutBg />
            <AboutBox>
                <img src={aboutBoxImage} alt="About"></img>
            </AboutBox>
            <AboutText>
                Riddler is an online cryptic hunt, organized every year by the Computer Socirty Of India, VIT Student Chapter
            </AboutText>
            <RiddlerBox>
                <img src={riddlerBoxImage} alt="About"></img>
            </RiddlerBox>
        </AboutContainer>
    </>
  );
};

export default About;

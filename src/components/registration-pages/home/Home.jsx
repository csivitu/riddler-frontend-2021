import React from "react";
// import { useEffect, useState } from "react";
// import Video from "./assets/teaser.mp4";
import riddlerLogo from "../../../assets/power.svg";
// import riddlerLogoSvg from "./assets/riddlerlogo_svg.svg";
// import Wave from "react-wavify";
import "./Home.css";
import {
  HomeContainer,
  // HomeBG,
  // VideoBG,
  HomeContent,
  HomeBtnWrapper,
  Button,
  RiddlerLogo,
  AboutBg
} from "./HomeElements";

function Home() {

  return (
    <HomeContainer id="home">
      <AboutBg>
        </AboutBg>
      <HomeContent>
        <RiddlerLogo>
          <img src={riddlerLogo} alt="Riddler Logo" />
          {/* <img className="shadow" src={riddlerLogoSvg} alt="Riddler Logo" /> */}
        </RiddlerLogo>
        <p className="dates">20<sup className="superscript">th</sup> - 22<sup className="superscript">nd</sup> August 2021</p>
        <HomeBtnWrapper>
            <Button to="/game">PLAY NOW</Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;

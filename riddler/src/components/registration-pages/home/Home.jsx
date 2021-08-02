import React from "react";
import { useEffect, useState } from "react";
// import Video from "./assets/teaser.mp4";
import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
// import riddlerLogoSvg from "./assets/riddlerlogo_svg.svg";
import Wave from "react-wavify";
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

  const [pauseTime, setPauseTime]  = useState(true)

  const changeAnimation = ()=>{
    setPauseTime(false)
  }
  useEffect(()=>{
    setTimeout(changeAnimation, 2000);
  }, [])

  return (
    <HomeContainer id="home">
      {/* <HomeBG>
        <VideoBG autoPlay muted loop src={Video} type="teaser.mp4" />
      </HomeBG> */}
      <AboutBg>
          <Wave
            className="Wave2"
            fill="#DBF429"
            paused={pauseTime}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.25,
              points: 3,
            }}
          />
          <Wave
            className="Wave1"
            fill="#FE3176"
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.25,
              points: 3,
            }}
          />
        </AboutBg>
      <HomeContent>
        <RiddlerLogo>
          <img src={riddlerLogo} alt="Riddler Logo" />
          {/* <img className="shadow" src={riddlerLogoSvg} alt="Riddler Logo" /> */}
        </RiddlerLogo>
        <HomeBtnWrapper>
            <Button to="/countdown">REGISTER</Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;

import React from "react";
import Video from "./assets/teaser.mp4";
import riddlerLogo from "./assets/riddler-logo-animated2.gif";
import riddlerLogoSvg from "./assets/riddlerlogo_svg.svg";
import {
  HomeContainer,
  HomeBG,
  VideoBG,
  HomeContent,
  HomeBtnWrapper,
  Button,
  RiddlerLogo,
} from "./HomeElements";

function Home() {
  return (
    <HomeContainer id="home">
      <HomeBG>
        <VideoBG autoPlay muted loop src={Video} type="teaser.mp4" />
      </HomeBG>
      <HomeContent>
        <RiddlerLogo>
          <img src={riddlerLogo} alt="Riddler Logo" />
          <img className="shadow" src={riddlerLogoSvg} alt="Riddler Logo" />
        </RiddlerLogo>
        <HomeBtnWrapper>
            <Button to="/register">REGISTER</Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
}

export default Home;

import { useState } from "react";
import {
  GameContainer,
  ButtonContainer,
  RiddlerLogo,
  Checkers,
  Bottom10,
} from "./style";
// import riddlerLogo from "../../../assets/riddlerlogo_svg.svg";
import riddlerLogo from "../../../assets/power.svg";

import playButton from "../../../assets/play_button.svg";
import playWithColor from "../../../assets/PlaywithColor.svg";

import guideWithColor from "../../../assets/guideWithColor.svg";
import guideButton from "../../../assets/guide_button.svg";
import leaderboardButton from "../../../assets/leaderboard_button.svg";
import leaderboardwithColor from "../../../assets/leaderboardwithColor.svg";
import { ReactComponent as StarRed } from "../../../assets/star_thing_1.svg";
import { ReactComponent as StarBlue } from "../../../assets/star_thing_2.svg";
import { ReactComponent as StarYellow } from "../../../assets/star_thing_3.svg";
import { ReactComponent as StarsmallBlue } from "../../../assets/star_thing_4.svg";
import checkers from "../../../assets/checkers.svg";

import { useHistory } from "react-router-dom";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "@react-spring/web";

const Game = () => {
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  };
  const logoPos = useSpring({ x: 0, y: 0 });
  const aPos = useSpring({ x: 0, y: 0 });
  const bPos = useSpring({ x: 0, y: 0 });
  const cPos = useSpring({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });
  const bindaPos = useDrag((params) => {
    aPos.x.set(params.offset[0]);
    aPos.y.set(params.offset[1]);
  });
  const bindbPos = useDrag((params) => {
    bPos.x.set(params.offset[0]);
    bPos.y.set(params.offset[1]);
  });
  const bindcPos = useDrag((params) => {
    cPos.x.set(params.offset[0]);
    cPos.y.set(params.offset[1]);
  });
  const [stateGuide, setstateGuide] = useState(guideButton);
  const [statePlay, setstatePlay] = useState(playButton);
  const [stateLeaderboard, setstateLeaderboard] = useState(leaderboardButton);

  return (
    <>
      <GameContainer>
        <animated.div
          {...bindLogoPos()}
          style={{
            x: logoPos.x,
            y: logoPos.y,
            position: "absolute",
            top: "8%",
            right: "12%",
            zIndex: "6",
            cursor: "pointer",
            fontSize: "6rem",
          }}
        >
          <StarRed />
        </animated.div>
        <animated.div
          {...bindaPos()}
          style={{
            x: aPos.x,
            y: aPos.y,
            position: "absolute",
            top: "20%",
            right: "11%",
            zIndex: "6",
            cursor: "pointer",
            fontSize: "3rem",

            // userSelect:"none",
          }}
        >
          <StarBlue />
        </animated.div>
        <animated.div
          {...bindbPos()}
          style={{
            x: bPos.x,
            y: bPos.y,
            position: "absolute",
            bottom: "0%",
            left: "7%",
            zIndex: "6",
            cursor: "pointer",
            fontSize: "8rem",
            // userSelect:"none",
          }}
        >
          <StarYellow />
        </animated.div>
        <animated.div
          {...bindcPos()}
          style={{
            x: cPos.x,
            y: cPos.y,
            position: "absolute",
            bottom: "21%",
            left: "6%",
            zIndex: "6",
            cursor: "pointer",
            fontSize: "4rem",

            // userSelect:"none",
          }}
        >
          <StarsmallBlue />
        </animated.div>
        <Bottom10>
          Made with <span>♥</span> by CSI-VIT.
        </Bottom10>
        <Checkers style={{ top: 0 }} src={checkers} alt="Checkers" />
        <Checkers style={{ bottom: 0 }} src={checkers} alt="Checkers" />
        <RiddlerLogo src={riddlerLogo} alt={"Riddler Logo"} />
        <ButtonContainer>
          <div
            id="/guide"
            onMouseEnter={() => {
              setstateGuide(guideWithColor);
            }}
            onMouseLeave={() => {
              setstateGuide(guideButton);
            }}
            onClick={(e) => {
              routeChange(e.target.id);
            }}
          >
            <img src={stateGuide} alt={"Riddler Logo"} />
          </div>
          <div
            id="/play"
            onMouseEnter={() => {
              setstatePlay(playWithColor);
            }}
            onMouseLeave={() => {
              setstatePlay(playButton);
            }}
            onClick={(e) => {
              routeChange(e.target.id);
            }}
          >
            <img src={statePlay} alt={"Riddler Logo"} />
          </div>
          <div
            id="/leaderboard"
            onMouseEnter={() => {
              setstateLeaderboard(leaderboardwithColor);
            }}
            onMouseLeave={() => {
              setstateLeaderboard(leaderboardButton);
            }}
            onClick={(e) => {
              routeChange(e.target.id);
            }}
          >
            <img src={stateLeaderboard} alt={"Riddler Logo"} />
          </div>
        </ButtonContainer>
      </GameContainer>
    </>
  );
};

export default Game;

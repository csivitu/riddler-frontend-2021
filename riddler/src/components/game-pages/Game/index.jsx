import { useEffect } from "react";
import { GameContainer, ButtonContainer, RiddlerLogo } from "./style";
import riddlerLogo from "../../../assets/riddlerlogo_svg.svg";
import playButton from "../../../assets/play_button.svg";
import rulesButton from "../../../assets/rules_button.svg";
import leaderboardButton from "../../../assets/leaderboard_button.svg";
import { useHistory } from "react-router-dom";

const Game = () => {
  useEffect(() => {
    const validateLogin = () => {
      let token = localStorage.getItem("token");
      if (!token) {
        console.log("Redirecting..");
      }
    };
    validateLogin();
  }, []);
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  };
  return (
    <GameContainer>
      <RiddlerLogo src={riddlerLogo} alt={"Riddler Logo"}/>
      <ButtonContainer>
        <img
          id="/rules"
          src={rulesButton}
          alt={"Riddler Logo"}
          onClick={(e) => {
            routeChange(e.target.id);
          }}
        />
        <img
          id="/play"
          src={playButton}
          alt={"Riddler Logo"}
          onClick={(e) => {
            routeChange(e.target.id);
          }}
        />
        <img
          id="/leaderboard"
          src={leaderboardButton}
          alt={"Riddler Logo"}
          onClick={(e) => {
            routeChange(e.target.id);
          }}
        />
      </ButtonContainer>
    </GameContainer>
  );
};

export default Game;

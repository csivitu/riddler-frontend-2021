import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  Player,
  MusicPlayer,
  MusicDropdown,
  NavMenuRight,
} from "./NavbarElements";
import { useSelector } from "react-redux";
import PlayLogo from "../../../assets/play.svg";
import GuideLogo from "../../../assets/guide.svg";
import LeaderboardLogo from "../../../assets/leaderboard.svg";
import star from "../../../assets/star.svg";
import { FaBars, FaStar, FaMusic, FaChevronDown } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";

import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
// import { ReactComponent as RidderLogo } from "./assets/riddlerlogo_svg_black.svg";
import { NavLink, useLocation } from "react-router-dom";
import { getPlayerdata } from "../../../api/requests";
import LightTooltip from "../../game-pages/Tooltip";

const Navbar = ({ toggle }) => {
  const location = useLocation();
  const userName = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const [score, setScore] = useState("-");

  useEffect(() => {
    const asyncPlayerdata = async () => {
      let res = await getPlayerdata(token);
      console.log(res);
      setScore(res.playerScore);
    };
    asyncPlayerdata();
  }, []);
  console.log("Rerendering");

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="game">
            <img src={riddlerLogo} alt="Riddler Logo"></img>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <LightTooltip title="Guide">
              <NavLinks to="rules">
                <img src={GuideLogo} alt="Guide Logo"></img>
              </NavLinks>
            </LightTooltip>
            <LightTooltip title="Game">
              <NavLinks to="play">
                <img src={PlayLogo} alt="Play Logo"></img>
              </NavLinks>
            </LightTooltip>
            <LightTooltip title="Leaderboard">
              <NavLinks to="leaderboard">
                <img src={LeaderboardLogo} alt="Leaderboard Logo"></img>
              </NavLinks>
            </LightTooltip>
          </NavMenu>
          <NavMenuRight>
            <Player>
              <FaStar />
              <p>{score}</p>
            </Player>
            <Player>{userName}</Player>
            <MusicPlayer>
              <FaMusic />
            </MusicPlayer>
            <MusicDropdown>
              <FaChevronDown />
            </MusicDropdown>
          </NavMenuRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

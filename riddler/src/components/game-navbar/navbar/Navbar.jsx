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
} from "./NavbarElements";
import { useSelector } from "react-redux";
import PlayLogo from "../../../assets/play.svg";
import GuideLogo from "../../../assets/guide.svg";
import LeaderboardLogo from "../../../assets/leaderboard.svg";
import star from "../../../assets/star.svg";
import { FaBars } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";

import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
// import { ReactComponent as RidderLogo } from "./assets/riddlerlogo_svg_black.svg";
import { NavLink, useLocation } from "react-router-dom";
import { getPlayerdata } from "../../../api/requests";

const Navbar = ({ toggle }) => {
  const location = useLocation();
  const userName = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const [score, setScore] = useState("-");

  useEffect(() => {
    const asyncPlayerdata = async () => {
      let res = await getPlayerdata(token);
      setScore(res.score);
    };
    asyncPlayerdata();

  }, [])
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
            <Tooltip title="Guide">
              <NavLinks to="rules">
                <img src={GuideLogo} alt="Guide Logo"></img>
              </NavLinks>
            </Tooltip>
            <Tooltip title="Game">
              <NavLinks to="play">
              <img src={PlayLogo} alt="Play Logo"></img>
              </NavLinks>
            </Tooltip>
            <Tooltip title="Leaderboard">
              <NavLinks to="leaderboard">
              <img src={LeaderboardLogo} alt="Leaderboard Logo"></img>
              </NavLinks>
            </Tooltip>
          </NavMenu>
          <NavMenu>
            <Player>
              <img src={star} alt="Riddler Logo" />
              <p>{score}</p>
            </Player>
            <Player>{userName}</Player>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

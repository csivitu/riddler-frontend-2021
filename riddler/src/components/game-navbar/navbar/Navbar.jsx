import React, { useEffect } from "react";
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
import { useSelector } from 'react-redux';
import { ReactComponent as PlayLogo } from "../../../assets/play.svg";
import { ReactComponent as GuideLogo } from "../../../assets/guide.svg";
import { ReactComponent as LeaderboardLogo } from "../../../assets/leaderboard.svg";
import star from "../../../assets/star.svg";
import { FaBars } from "react-icons/fa";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
// import { ReactComponent as RidderLogo } from "./assets/riddlerlogo_svg_black.svg";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const location = useLocation();
  const userName = useSelector(state => state.auth.username)

  const fillSvg = (svgName) => {
    if (location.pathname === svgName) return "#FE3176";
    else return "black";
  };
  // color #FE3176
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
              <NavLogo
                to="/rules"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <GuideLogo fill={fillSvg("/rules")} />
              </NavLogo>
            </Tooltip>
            <Tooltip title="Game">
              <NavLogo
                to="game"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <PlayLogo fill={fillSvg("/play")} />
              </NavLogo>
            </Tooltip>
            <Tooltip title="Leaderboard">
              <NavLogo
                to="leaderboard"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <LeaderboardLogo fill={fillSvg("/leaderboard")} />
              </NavLogo>
            </Tooltip>
          </NavMenu>
          <NavMenu>
            <Player>
              <img src={star} alt="Riddler Logo" />
              <p>440</p>
            </Player>
            <Player>{userName}</Player>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

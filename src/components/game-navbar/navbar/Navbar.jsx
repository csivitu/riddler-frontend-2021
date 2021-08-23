import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  MobileIcon,
  Player,
  MusicPlayer,
  NavMenuRight,
} from "./NavbarElements";
import { useDispatch, useSelector } from "react-redux";
import PlayLogo from "../../../assets/play.svg";
import GuideLogo from "../../../assets/guide.svg";
import LeaderboardLogo from "../../../assets/leaderboard.svg";
import { FaBars, FaStar } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";
import { getPlayerdata } from "../../../api/requests";
import LightTooltip from "../../game-pages/Tooltip";
import { logout } from "../../../redux/reducers/authReducer";

const Navbar = ({ toggle, backgroundColor, wantHint }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.username);
  const token = useSelector((state) => state.auth.token);
  const [score, setScore] = useState("-");
  const [currentTrack, setCurrentTrack] = useState(
    JSON.parse(localStorage.getItem("currentTracks"))
      ? JSON.parse(localStorage.getItem("currentTracks"))
      : []
  );

  const updateColor = (res) => {
    setCurrentTrack(res.currentTrack);
    if (currentTrack === [] || currentTrack === null) {
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        "--present"
      );
      document.documentElement.style.setProperty("--map-bg", "--past");
      document.documentElement.style.setProperty("--guide-bg", "--future");
    } else {
      const varNames = {
        1: "--present",
        2: "--past",
        3: "--future",
      };
      const currentColor = varNames[currentTrack[0]];
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--map-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--guide-bg",
        `var(${currentColor})`
      );
    }
  };

  useEffect(() => {
    const asyncPlayerdata = async () => {
      let res = await getPlayerdata(token);
      updateColor(res);
      setScore(res.playerScore);
    };
    asyncPlayerdata();
  }, [wantHint]);

  return (
    <>
      <Nav backgroundColor={backgroundColor}>
        <NavbarContainer>
          <NavLogo to="game">
            <img src={riddlerLogo} alt="Riddler Logo"></img>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <LightTooltip title="Guide">
              <NavLinks to="guide">
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
            <Player backgroundColor={backgroundColor}>
              <FaStar />
              <p>{score}</p>
            </Player>
            <Player backgroundColor={backgroundColor}>{userName}</Player>
            <LightTooltip title="Log Out">
              <MusicPlayer
                backgroundColor={backgroundColor}
              >
                <HiOutlineLogout
                  onClick={() => {
                    dispatch(logout());
                    localStorage.removeItem("userCreated");
                    // window.location.href = "/";
                  }}
                />
              </MusicPlayer>
            </LightTooltip>
          </NavMenuRight>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

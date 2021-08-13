import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
      <SideBtnWrap>
          {/* <SidebarRoute to="/register">REGISTER</SidebarRoute> */}

        </SideBtnWrap>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="rules"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            GUIDE
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="game"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            PLAY
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="leaderboard"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            LEADERBOARD
          </SidebarLink>
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

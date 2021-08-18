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

const Sidebar = ({ isOpen, toggle, backgroundColor }) => {
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
            backgroundColor={backgroundColor}
          >
            GUIDE
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="play"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            backgroundColor={backgroundColor}
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
            backgroundColor={backgroundColor}
          >
            LEADERBOARD
          </SidebarLink>
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

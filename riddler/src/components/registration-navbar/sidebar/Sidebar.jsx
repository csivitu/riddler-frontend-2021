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
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="tracks"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Tracks
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="faqs"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            FAQs
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="countdown"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Countdown
          </SidebarLink>
          {/* <SidebarLink
            onClick={toggle}
            to="prizes"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Prizes
          </SidebarLink> */}
          <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/register">REGISTER</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">About</SidebarLink>
          <SidebarLink onClick={toggle} to="tracks">Tracks</SidebarLink>
          <SidebarLink onClick={toggle} to="faqs">FAQs</SidebarLink>
          <SidebarLink onClick={toggle} to="countdown">Countdown</SidebarLink>
          {/* <SidebarLink onClick={toggle} to="prizes">Prizes</SidebarLink> */}
          <SidebarLink onClick={toggle} to="contact">Contact Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/register">Register</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;

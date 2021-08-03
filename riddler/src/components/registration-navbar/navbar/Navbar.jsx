import React from "react";
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
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import riddlerLogo from "./assets/riddlerlogo_svg_black.svg";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <img src={riddlerLogo} alt="Riddler Logo"></img>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="tracks"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                TRACKS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="faqs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                FAQs
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="countdown"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Countdown
              </NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks
                to="prizes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Prizes
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                CONTACT US
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="/countdown"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              REGISTER
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

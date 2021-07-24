import React from 'react'
import {Nav,NavbarContainer,NavLogo,NavMenu,NavItem,NavLinks,MobileIcon,NavBtn,NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'

function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Riddler
                    </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tracks">
                                Tracks
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="faqs">
                                FAQs
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="countdown">
                                Countdown
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="prizes">
                                Prizes
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">
                                Contact Us
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/register">REGISTER</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

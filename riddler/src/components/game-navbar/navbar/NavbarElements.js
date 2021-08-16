import styled from "styled-components";
import { Link as LinkRouter, NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  @font-face {
    font-family: Ligconsolata;
    src: url("ligconsolata.ttf");
  }
  font-family: Ligconsolata;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  background-color: var(--navbar-bg);
  z-index: 10;

  @media screen and (min-width: 950px) {
    transition: all 0.8s ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(NavLink)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  img {
    height: 1.5rem;
    color: white;
  }

  @media screen and (max-width: 350px) {
    margin-left: 10px;
    img {
      width: 70%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    right: 10px;
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-self: center;
  gap: 1rem;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(NavLink)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 25px;

  img {
    height: 100%;
  }

  &.active {
    height: 35px;
  }

  @media screen and (max-width: 350px) {
    margin-left: 10px;
    img {
      width: 70%;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fe3176;
  }
`;
export const Player = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-evenly;
  text-decoration: none;
  align-self: center;
  height:40px;
  padding:2px;
  color: var(--navbar-bg);
  background-color: black;
  min-width:110px;
  border:3px solid black;
  border-bottom:4px solid black;
  margin-right: 14px;

  img{
    height:75%;
  }

  @media screen and (max-width: 350px) {
    margin-left: 10px;
    img {
      width: 70%;
    }
  }
`;

export const MusicPlayer = styled.div`
  height: 40px;
  width: 40px;
  background-color: black;
  color: var(--navbar-bg);
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
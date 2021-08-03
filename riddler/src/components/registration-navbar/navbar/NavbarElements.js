import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  background-color: #DBF429;
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

export const NavLogo = styled(LinkScroll)`
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
    color:white;
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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  &.active, &:active {
    color: #FE3176;
  }
`;

export const NavBtn = styled.nav`
  display:flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 950px){
      display:none;
  }
`
export const NavBtnLink = styled(LinkRouter)`
  border-radius:50px;
  background: black;
  white-space: nowrap;
  padding:10px 22px;
  color:white;
  font-size:16px;
  outline:none;
  border:none;
  font-weight: bold;
  cursor:pointer;
  transition:all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition:all 0.2s ease-in-out;
      background:#1C1CD2;
      color:#000000;
  }
`
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <ul className="">
      <NavItem to="/aboutme" className="is-hoverable sezzy-slider">About Me</NavItem>
      <NavItem to="/resources" className="is-hoverable sezzy-slider">Resources</NavItem>
      <NavItem to="/schoolwork" className="is-hoverable sezzy-slider">Schoolwork</NavItem>
    </ul>
  )
}

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  font-family: "Cinzel Decorative";
  color: snow;
  font-size: 1.35rem;
  text-shadow: 0px 1px black, 1px 0px black, -1px 0px black, 0px -1px black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-decoration: none;
  list-style-type: none;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: gold;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: gold;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

export default NavbarLinks
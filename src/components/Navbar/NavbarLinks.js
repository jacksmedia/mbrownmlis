import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/aboutme" className="is-hoverable">About Me</NavItem>
      <NavItem to="/digitalservices" className="is-hoverable">Digital Services</NavItem>
      <NavItem to="/metadata" className="is-hoverable">Metadata</NavItem>
      <NavItem to="/links" className="is-hoverable">Links</NavItem>
      <NavItem to="/resources" className="is-hoverable">Resources</NavItem>
    </>
  )
}

const NavItem = styled(Link)`
  font-family: "Cinzel Decorative";
  color: snow;
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
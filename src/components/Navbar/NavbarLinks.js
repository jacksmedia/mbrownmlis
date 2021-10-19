import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="is-hoverable creamsicle-text">Home</NavItem>
      <NavItem to="/aboutme" className="is-hoverable creamsicle-text">About Me</NavItem>
      <NavItem to="/digitalservices" className="is-hoverable creamsicle-text">Digital Services</NavItem>
      <NavItem to="/metadata" className="is-hoverable creamsicle-text">Metadata</NavItem>
      <NavItem to="/links" className="is-hoverable creamsicle-text">Links</NavItem>
      <NavItem to="/resources" className="is-hoverable creamsicle-text">Resources</NavItem>
      <NavItem to="/schoolwork" className="is-hoverable creamsicle-text">Schoolwork</NavItem>
    </>
  )
}

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: tomato;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: tomato;
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
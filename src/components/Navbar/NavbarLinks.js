import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="is-hoverable creamsicle-text">Home/Blog</NavItem>
      <NavItem to="/projects" className="is-hoverable creamsicle-text">Projects</NavItem>
      <NavItem to="/media" className="is-hoverable creamsicle-text">Jacks.Media</NavItem>
      <NavItem to="/mining" className="is-hoverable creamsicle-text">Mining</NavItem>
      <NavItem to="/llc" className="is-hoverable creamsicle-text">Consulting</NavItem>
      <NavItem to="/taichi" className="is-hoverable creamsicle-text">Tai Chi</NavItem>
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
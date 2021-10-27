import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import { Link } from "gatsby"

const TopBar = styled.nav`
  min-height: 72px;
  height: 12vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 0 0 0;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const NavTitle = styled(Link)`
  font-family: "Cinzel Decorative";
  text-decoration: none;
  font-size: 1.55rem;
  text-shadow: 0px 1px black, 1px 0px black, -1px 0px black, 0px -1px black;
  color: snow;
  display: inline-block;
  white-space: nowrap;
  padding-right: 3rem;
  padding-left: 3rem;
`

const Navtray = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 70%;
    justify-content: flex-start;
    padding-top: 72px;
    background-color: #082C2A;
    transition: all 0.3s ease-in;
    top: 72px;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #eee;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #eee;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <TopBar className="header-img" alt="bookshelf picture copyright M Brown, 2013">
      <NavTitle to="/" className="is-hoverable">M Brown MLIS</NavTitle>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navtray>
          <NavbarLinks />
        </Navtray>
      ) : (
        <Navtray open>
          <NavbarLinks />
        </Navtray>
      )}
    </TopBar>
  )
}

export default Navbar
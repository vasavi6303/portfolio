import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link as ScrollLink, animateScroll } from "react-scroll";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: true,
    });

    setIsNavbarOpen(false);
  };
  return (
    <MDBNavbar
      fixed="top"
      scrolling
      transparent
      dark
      expand="lg"
      className={isNavbarOpen ? "top-nav-collapse" : ""}
    >
      <div className="container">
        <MDBNavbarBrand className="navbar-brand" onClick={() => scrollToTop()}>
          <strong>
            V<span className="gold">A</span>S<span className="gold">A</span>VI
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        <MDBCollapse id="navbarCollapse" isOpen={isNavbarOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <ScrollLink
                spy
                smooth
                offset={-60}
                duration={250}
                className="nav-link"
                to="about"
                onClick={() => setIsNavbarOpen(false)}
              >
                About
              </ScrollLink>
            </MDBNavItem>
            <MDBNavItem>
              <ScrollLink
                spy
                smooth
                offset={-60}
                duration={250}
                className="nav-link"
                to="skills"
                onClick={() => setIsNavbarOpen(false)}
              >
                Skills
              </ScrollLink>
            </MDBNavItem>
            <MDBNavItem>
              <ScrollLink
                spy
                smooth
                offset={-30}
                duration={500}
                className="nav-link"
                to="work-history"
                onClick={() => setIsNavbarOpen(false)}
              >
                Work History
              </ScrollLink>
            </MDBNavItem>
            <MDBNavItem>
              <ScrollLink
                spy
                smooth
                offset={-30}
                duration={500}
                className="nav-link"
                to="projects"
                onClick={() => setIsNavbarOpen(false)}
              >
                Projects
              </ScrollLink>
            </MDBNavItem>
            <MDBNavItem>
              <ScrollLink
                spy
                smooth
                offset={-60}
                duration={500}
                className="nav-link"
                to="contact"
                onClick={() => setIsNavbarOpen(false)}
              >
                Contact
              </ScrollLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  );
}

export default Navbar;

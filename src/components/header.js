import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

const Header = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
      
        <Navbar fixed="top" expand="sm">
        <div className="container">
          <NavbarBrand href="/">{props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/demos">Demos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
            </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

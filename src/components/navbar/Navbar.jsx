import React from "react";
import {Navbar} from "react-bootstrap";
import NavBarItems from "./NavbarItems";
import {LANGUAGES} from "../../res/Constants";
import loadable from '@loadable/component'
import NavItem from "react-bootstrap/NavItem";

const LanguageButton = loadable(() => import('../buttons/LanguageButton'));

const NavBar = (props) => {
  const navbarStyle = {
    display: 'flex',
    minHeight: '88px',
    boxShadow: '5px 5px 10px 2px, -5px -5px 10px 2px',
  };

  const langButtonContainerStyle = {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end'
  };

  return <Navbar
    collapseOnSelect
    fixed="top"
    expand="xl"
    bg="dark"
    variant="dark"
    style={navbarStyle}
  >
    <Navbar.Toggle
      style={{margin: '1rem 0.5rem'}}
      aria-controls="responsive-navbar-nav"
    />
    <Navbar.Collapse
      id="responsive-navbar-nav"
      style={{flexGrow: '15'}}
    >
      <NavBarItems {...props}/>
    </Navbar.Collapse>
    <div style={langButtonContainerStyle}>
      {Object.entries(LANGUAGES).map(([language, params]) => {
         return <NavItem as={LanguageButton}
                   onClick={() => props.setLanguage(LANGUAGES[language])}
                   label={params.FLAG_LABEL}
                   image={params.FLAG}
          />
      })}
    </div>
  </Navbar>
};
export default NavBar;

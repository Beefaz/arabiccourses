import React from "react";
import {Navbar} from "react-bootstrap";
import NavBarItems from "./NavbarItems";
import {LANGUAGES, FLAGS} from "../../res/Constants";
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

    return <Navbar collapseOnSelect
                   fixed="top"
                   expand="lg"
                   bg="dark"
                   variant="dark"
                   style={navbarStyle}>
        <Navbar.Toggle style={{margin: '1rem'}}
                       aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow: '15'}}>
            <NavBarItems {...props}/>
        </Navbar.Collapse>
        <div style={langButtonContainerStyle}>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.LT)}
                     label="Lietuvių"
                     image={FLAGS[0]}/>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.EN)}
                     label="English"
                     image={FLAGS[1]}/>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.AR)}
                     label="اَلْعَرَبِيَّةُ"
                     image={FLAGS[2]}/>
        </div>
    </Navbar>
};
export default NavBar;
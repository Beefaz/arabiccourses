import React from "react";
import {Navbar} from "react-bootstrap";
import NavBarItems from "./NavbarItems";
import {LANGUAGES, FLAGS} from "../../res/Constants";
import loadable from '@loadable/component'
import NavItem from "react-bootstrap/NavItem";

const LanguageButton = loadable(() => import('../buttons/LanguageButton'));

const NavBar = (props) => {
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
                   style={{display: 'flex'}}>
        <Navbar.Toggle style={{margin: '1rem'}}
                       aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{flexGrow: '15'}}>
            <NavBarItems {...props}/>
        </Navbar.Collapse>
        <div style={langButtonContainerStyle}>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.LT)}
                     aria-label="Lietuvių"
                     image={FLAGS[0]}/>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.EN)}
                     aria-label="English"
                     image={FLAGS[1]}/>
            <NavItem as={LanguageButton} onClick={() => props.setLanguage(LANGUAGES.AR)}
                     aria-label="اَلْعَرَبِيَّةُ"
                     image={FLAGS[2]}/>
        </div>
    </Navbar>
};
export default NavBar;
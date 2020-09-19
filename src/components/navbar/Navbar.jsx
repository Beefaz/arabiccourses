import React from "react";
import {Navbar} from "react-bootstrap";
import NavBarItems from "./NavbarItems";
import {Row} from "react-bootstrap";
import {LANGUAGES, FLAGS} from "../../res/Constants";
import loadable from '@loadable/component'
const LanguageButton = loadable(() => import('../buttons/LanguageButton'));

const NavBar = (props) => {

    return <Navbar collapseOnSelect
                   fixed="top"
                   expand="lg"
                   bg="dark"
                   variant="dark">
        <Navbar.Toggle style={{margin: '1rem'}}
                       aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <NavBarItems {...props}/>
        </Navbar.Collapse>
        <Row style={{marginLeft: 'auto'}}>
            <LanguageButton onClick={() => props.setLanguage(LANGUAGES.LT)}
                            image={FLAGS[0]}/>
            <LanguageButton onClick={() => props.setLanguage(LANGUAGES.EN)}
                            image={FLAGS[1]}/>
            <LanguageButton onClick={() => props.setLanguage(LANGUAGES.AR)}
                            image={FLAGS[2]}/>
        </Row>
    </Navbar>
};
export default NavBar;
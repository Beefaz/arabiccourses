import React from "react";
import {Navbar} from "react-bootstrap";
import LanguageButton from "../buttons/LanguageButton";
import NavBarItems from "./NavbarItems";
import {Row} from "react-bootstrap";
import {LANGUAGES, FLAGS} from "../../res/Constants";

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
            <LanguageButton onClick={() => props.setLanguage(LANGUAGES.AR)} i
                            mage={FLAGS[2]}/>
        </Row>
    </Navbar>
};
export default NavBar;
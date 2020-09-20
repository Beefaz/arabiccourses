import React from "react";
import {Link} from "react-router-dom";
import {LINKS} from "../../res/Constants";
import {Nav} from "react-bootstrap";
import {useMediaPredicate} from "react-media-hook";

const NavBarItems = (props) => {
    const screensize = useMediaPredicate("(min-width: 320px)");
    const linkBoxStyle = {
        flexGrow: '1',
        display: 'flex',
        listStyle: 'none',
        fontSize: screensize ? '1.5rem' : '1.3rem'
    };

    const linkStyle = {
        padding: '7px',
        flexGrow: '1',
        color: 'rgba(255,255,255,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
    };

    const addShadow = (e) => {
        e.currentTarget.style.fontSize = screensize ? '2rem' : '1.3rem';
        e.currentTarget.style.textShadow = '1px 1px 5px rgba(226,157,73,1)';
        e.currentTarget.style.fontWeight = 'bold';
    };
    const removeShadow = (e) => {
        e.currentTarget.style.fontSize = screensize ? '1.5rem' : '1.3rem';
        e.currentTarget.style.textShadow = 'none';
        e.currentTarget.style.fontWeight = 'inherit';
    };

    return <Nav style={linkBoxStyle}>
        {props.language.LINKLABELS.map(
            (sectionName, index) => (
                <Nav.Link as={Link} style={linkStyle}
                          label={sectionName}
                          onMouseOver={addShadow}
                          onMouseLeave={removeShadow}
                          to={LINKS[index]}
                          key={index}
                          href={LINKS[index]}>
                    {sectionName}
                </Nav.Link>
            ),
        )}
    </Nav>
};
export default NavBarItems;
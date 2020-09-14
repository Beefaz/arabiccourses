import React from "react";
import {Link} from "react-router-dom";
import {LINKS} from "../../res/Constants";
import Nav from "react-bootstrap/Nav";

const NavBarItems = (props) => {
    const linkBoxStyle = {
        flexGrow: '1',
        display: 'flex',
        listStyle: 'none',
        fontSize: '1.5rem',
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
        e.currentTarget.style.fontSize = '2rem';
        e.currentTarget.style.textShadow = '1px 1px 5px rgba(226,157,73,1)';
        e.currentTarget.style.fontWeight = 'bold';
    };
    const removeShadow = (e) => {
        e.currentTarget.style.fontSize = '1.5rem';
        e.currentTarget.style.textShadow = 'none';
        e.currentTarget.style.fontWeight = 'inherit';
    };

    return <Nav style={linkBoxStyle}>
        {props.language.LINKLABELS.map(
            (sectionName, index) => (
                <Link style={linkStyle}
                      label={sectionName}
                      onMouseOver={addShadow}
                      onMouseLeave={removeShadow}
                      to={LINKS[index]}
                      key={index}>
                    {sectionName}
                </Link>
            ),
        )}
    </Nav>
};
export default NavBarItems;
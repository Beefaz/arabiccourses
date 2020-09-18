import React from "react";

const Logo = (props) => {
    const containerStyle = {
        marginRight: '1rem'
    };

    const logoStyle = {
        height: '2ch',
    };

    return <a style={containerStyle}
              href={props.href}
              target="_blank"
              rel="noopener noreferrer">
        <img style={logoStyle}
             src={props.img}
             alt=""/>
        {props.title}
    </a>
};
export default Logo;
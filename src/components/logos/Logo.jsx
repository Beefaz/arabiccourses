import React from "react";

const Logo = (props) => {
    const logoStyle = {
        height: '2ch',
    };

    return <a href={props.href}
              target="_blank"
              rel="noopener noreferrer">
        <img style={logoStyle}
             src={props.img}
             alt=""/>
        {props.title}
    </a>
};
export default Logo;
import React from "react";

const Logo = (props) => {
    const containerStyle = {
        textShadow: '1px 1px #000000',
        marginLeft: '1rem'
    };
    const logoStyle = {
        height: '1.3rem',
        width: '1.3rem',
        verticalAlign: 'text-top'
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
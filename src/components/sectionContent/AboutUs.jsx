import React from "react";
import image from "../../res/img/avatar.jpg"
import {useMediaPredicate} from "react-media-hook";


const AboutUs = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");

    const textStyle = {
        lineHeight: screensize ? '2.5rem' : '2rem',
        fontWeight: '600',
        fontSize: screensize ? '1.2rem' : '1.1rem'
    };
    const imageStyle = {
        shapeOutside: 'circle(50%)',
        borderRadius: '50%',
        overflow: 'hidden',
        float: 'right',
        height: '50vmin',
        width: '50vmin'
    };

    return <div style={{display: 'inline-block'}}>
        {props.label}
        <img style={imageStyle}
             src={image}
             alt=""/>
        <p style={textStyle}>{props.language.ABOUTUS}</p>
    </div>
};
export default AboutUs;
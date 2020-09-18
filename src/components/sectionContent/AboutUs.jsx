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
        shapeOutside: screensize ? 'circle(50%)' : 'none',
        borderRadius: '50%',
        overflow: 'hidden',
        float: screensize ? 'right' : 'inherit',
        width: screensize ? '50vh' : '20vh'
    };

    return <div style={{display:'inline-block'}}>
        {props.label}
        <img style={imageStyle}
             src={image}
             alt=""/>
        <p style={textStyle}>{props.language.ABOUTUS}</p>
    </div>
};
export default AboutUs;
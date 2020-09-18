import React from "react";
import image from "../../res/img/avatar.jpg"
import {useMediaPredicate} from "react-media-hook";


const AboutUs = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");
    const screensizeForImage = useMediaPredicate("(min-width: 600px)");

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
        width: screensizeForImage ? '50vh' : '50vw'
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
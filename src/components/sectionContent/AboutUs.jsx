import React from "react";
import image from "../../res/img/avatar.jpg"
import {useMediaPredicate} from "react-media-hook";


const AboutUs = (props) => {
    const screensizeSM = useMediaPredicate("(min-width: 400px)");
    const screensizeMD = useMediaPredicate("(min-width: 500px)");
    const textStyle = {
        lineHeight: screensizeSM ? '2.5rem' : '2rem',
        fontWeight: '600',
        fontSize: screensizeSM ? '1.2rem' : '1.1rem'
    };
    const imageStyle = {
        shapeOutside: screensizeMD ? 'circle(50%)' : 'none',
        borderRadius: '50%',
        overflow: 'hidden',
        float: screensizeMD ? 'right' : 'inherit',
        width: screensizeMD ? '50vh' : '20vh'
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
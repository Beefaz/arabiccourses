import React from "react";
import image from "../../res/img/avatar.jpg"
import {useMediaPredicate} from "react-media-hook";
import loadable$2 from "@loadable/component";
const AvatarImage = loadable$2(() => import('../images/AvatarImage'));

const AboutUs = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");

    const textStyle = {
        lineHeight: screensize ? '2.5rem' : '2rem',
        fontWeight: '600',
        fontSize: screensize ? '1.2rem' : '1.1rem',
        ...props.language.TEXTDIRECTION
    };

    return <div style={{display: 'inline-block', width: '100%'}}>
        {props.label}
        <AvatarImage float = {props.language.STYLES.AVATARIMAGEFLOAT}
             src={image}/>
        <p style={textStyle}>{props.language.ABOUTUS}</p>
    </div>
};
export default AboutUs;
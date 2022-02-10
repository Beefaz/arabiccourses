import React from "react";
import image from "../../res/img/logo.jpg"
import {useMediaPredicate} from "react-media-hook";
import loadable$1 from "@loadable/component";
import {newLinesToComponents} from "../../res/Constants";
const AvatarImage = loadable$1(() => import('../images/AvatarImage'));

const AboutUs = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");

    const textStyle = {
        lineHeight: screensize ? '2.5rem' : '2rem',
        fontWeight: '600',
        fontSize: screensize ? '1.2rem' : '1.1rem',
        ...props.language.STYLES.TEXTDIRECTION,
    };

    return <div style={{display: 'inline-block', width: '100%'}}>
        {props.label}
        <AvatarImage float={props.language.STYLES.AVATARIMAGEFLOAT}
                     src={image}/>
        {newLinesToComponents('p', textStyle, props.language.ABOUTUS)}
    </div>
};
export default AboutUs;

import React from "react";
import bgImage from "../../res/img/background/desert.jpg";

const Background = () => {

    const bgStyle = {
        margin: 'auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bgImage})`,
        minHeight: '150vh',
        padding: '0',
        backgroundSize: 'cover',
        opacity: '0.97'
    };
    return <div style={bgStyle}/>
};
export default Background;
import React from "react";
import bgImage from "../../res/img/background/desert.jpg";

const Background = () => {
    const imgContainerStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
    };
    const imgProps = {
        src: bgImage,
        style: {
            height:'100%',
            width: '100%',
            objectFit: 'cover',
            overflow: 'hidden',
            objectPosition: 'top'
        },
    };

    return <div style={imgContainerStyle}>
        <img {...imgProps} alt='background'/>
    </div>
};
export default Background;

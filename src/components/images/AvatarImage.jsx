import React from "react";


const AvatarImage = (props) => {
    const imageStyle = {
        shapeOutside: 'circle(50%)',
        borderRadius: '50%',
        overflow: 'hidden',
        float: props.float,
        height: '50vmin',
        width: '50vmin'
    };

    return <img style={imageStyle}
             src={props.src}
             alt=""/>
};
export default AvatarImage;
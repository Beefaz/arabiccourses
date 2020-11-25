import React from "react";


const AvatarImage = (props) => {
    const imageStyle = {
        boxShadow: '1px 1px 5px 1px, -1px -1px 5px 1px',
        shapeOutside: 'circle(50%)',
        borderRadius: '50%',
        overflow: 'hidden',
        float: props.float,
        height: '50vmin',
        width: '50vmin',
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: '3px',
        borderStyle: 'solid'
    };

    return <img style={imageStyle}
             src={props.src}
             alt=""/>
};
export default AvatarImage;
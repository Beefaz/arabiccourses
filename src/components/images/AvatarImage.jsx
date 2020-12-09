import React from "react";


const AvatarImage = (props) => {
    const containerStyle = {
        boxShadow: '1px 1px 5px 1px, -1px -1px 5px 1px',
        shapeOutside: 'circle(50%)',
        borderRadius: '50%',
        float: props.float,
        height: '50vmin',
        width: '50vmin',
        margin: '10px',
        overflow: 'hidden'
    };
    const imageStyle = {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '3px',
        borderRadius: '50%',
        width: '100%',
      objectFit: 'cover',
    };
    return <div style={containerStyle}>
        <img style={imageStyle}
                src={props.src}
                alt=""/>
    </div>
};
export default AvatarImage;
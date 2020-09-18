import React from "react";
import {useMediaPredicate} from "react-media-hook";

const LanguageButton = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");

    const colStyle = {
        display: 'flex',
        padding: screensize ? '10px' : '5px',
    };

    const imgStyle = {
        padding: '1px',
        margin: 'auto',
        cursor: 'pointer',
        height: screensize ? '3rem' : '2.5rem',
        width: screensize ? '3rem' : '2.5rem',
        border: '3px',
        borderRadius: '50%',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderStyle: 'outset'
    };

    const addBorder = (e) => {
        e.currentTarget.style.borderStyle = 'inset';
        e.currentTarget.style.borderColor = 'rgba(226,157,73,1)';
        e.currentTarget.style.backgroundColor =  'rgba(226,157,73,1)';
    };

    const removeBorder = (e) => {
        e.currentTarget.style.borderStyle = 'outset';
        e.currentTarget.style.borderColor = 'grey';
        e.currentTarget.style.backgroundColor =  'white';
    };

    return <div style={colStyle} onClick={props.onClick}>
        <img style={imgStyle}
             src={props.image}
             alt=""
             onMouseEnter={addBorder}
             onMouseLeave={removeBorder}/>
    </div>
};
export default LanguageButton;
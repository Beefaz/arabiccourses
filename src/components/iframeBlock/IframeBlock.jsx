import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import Iframe from "react-iframe";

const IframeBlock = (props) => {
    const [show, setShow] = useState(true);
    const containerStyle = {
        boxShadow: '1px 1px 5px 1px, -1px -1px 5px 1px',
        display: 'flex',
        height: '400px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style
    };

    const spinnerStyle = {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: props.height || '400px',

    };

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 1500);
    }, [show, setShow]);

    return <div style={containerStyle}>
        {show && <div style={spinnerStyle}><Spinner animation="border" role="status"/></div>}
        <Iframe width="100%"
                height="100%"
                frameBorder="0"
                aria-hidden="false"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                url={props.url}/>
    </div>
};
export default IframeBlock;
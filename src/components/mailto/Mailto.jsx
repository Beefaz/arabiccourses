import React from "react";

const Mailto = (props) => {
    const href = {
        mailto: props.mailto
    };
    return <a href={href}
              style={{wordWrap: "break-word", textShadow: '1px 1px #000000'}}>
        {props.mail}
    </a>
};
export default Mailto;
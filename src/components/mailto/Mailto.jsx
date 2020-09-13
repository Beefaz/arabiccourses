import React from "react";

const Mailto = (props) => {
    return <a href={'mailto:'+ props.email}
              style={{wordWrap: "break-word", textShadow: '1px 1px #000000'}}>
        {props.email}
    </a>
};
export default Mailto;
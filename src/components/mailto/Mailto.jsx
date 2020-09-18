import React from "react";

const Mailto = (props) => {
    return <a href={'mailto:' + props.email}
              style={{wordWrap: "break-word"}}>
        {props.email}
    </a>
};
export default Mailto;
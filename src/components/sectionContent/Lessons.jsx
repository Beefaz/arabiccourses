import React from "react";
import IframeBlock from "../iframeBlock/IframeBlock";

const Lessons = (props) => {
    return <div>
        {props.label}
        <IframeBlock url={'https://www.youtube.com/embed/4-h4QW0J_Fk'}/>
    </div>
};
export default Lessons;
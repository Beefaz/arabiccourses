import React from "react";
import loadable$2 from "@loadable/component";
const IframeBlock =  loadable$2(() => import("../iframeBlock/IframeBlock"));

const Lessons = (props) => {
    return <div>
        {props.label}
        <IframeBlock title='Promo' url={'https://www.youtube.com/embed/4ybn3kKuu3I'}/>
        <IframeBlock title='Lesson' url={'https://www.youtube.com/embed/4-h4QW0J_Fk'}/>
    </div>
};
export default Lessons;
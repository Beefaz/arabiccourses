import React from "react";
import Iframe from "react-iframe";


const Lessons = (props) => {
    return <div>
        <h1>{props.label}</h1><br/>
        <Iframe width="100%"
                height="415"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                url={"https://www.youtube.com/embed/LyzupN62MGA"}/>
    </div>
};
export default Lessons;
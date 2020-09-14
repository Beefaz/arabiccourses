import React from "react";
import RemoteCourses from "./RemoteCourses";
import Lessons from "./Lessons";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Contacts from "./Contacts";

const SectionContentLoader3 = (props) => {
    if (props.index === 0) {
        return <div>
            <h1>{props.label}</h1>
            <RemoteCourses language={props.language}/>
        </div>
    } else if (props.index === 1) {
        return <div>
            <h1>{props.label}</h1>
            <Lessons language={props.language}/>
        </div>
    } else if (props.index === 2) {
        return <div>
            <h1>{props.label}</h1>
            <AboutUs language={props.language}/>
        </div>
    } else if (props.index === 3) {
        return <div>
            <h1>{props.label}</h1>
            <Gallery language={props.language}/>
        </div>
    } else if (props.index === 4) {
        return <div>
            <h1>{props.label}</h1>
            <Contacts language={props.language}/>
        </div>
    } else {
        return <div>
            <h1>{props.label}</h1>
            <RemoteCourses language={props.language}/>
        </div>
    }
};
export default SectionContentLoader3;
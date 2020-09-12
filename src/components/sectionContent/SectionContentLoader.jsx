import React from "react";
import RemoteCourses from "./RemoteCourses";
import Lessons from "./Lessons";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Contacts from "./Contacts";



/// reikia butinai key kiekvienam child, perduodu per props.
const SectionContentLoader = (props) =>  {
    const SECTION_CONTENT = {
        '0': <AboutUs {...props}/>,
        '1': <RemoteCourses {...props}/>,
        '2': <Lessons {...props}/>,
        '3': <Gallery {...props}/>,
        '4': <Contacts {...props}/>
    };

    return SECTION_CONTENT[props.index]
};
export default SectionContentLoader;
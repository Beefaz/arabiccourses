import React from "react";
import Image from "react-bootstrap/Image";
import image from "../../res/img/avatar.jpg"


const AboutUs = (props) => {
    return <div>
        <h1>{props.label}</h1><br/>
        <Image src={image}
               alt=""
               thumbnail/>
    </div>
};
export default AboutUs;
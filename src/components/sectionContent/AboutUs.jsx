import React from "react";
import Image from "react-bootstrap/Image";
import image from "../../res/img/avatar.jpg"


const AboutUs = (props) => {
    return <div>
        {props.label}
        <Image src={image}
               alt=""
               thumbnail/>
    </div>
};
export default AboutUs;
import React from "react";
import {LOGOS} from '../../res/Constants'
import Logo from "../logos/Logo";
import Mailto from "../mailto/Mailto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
const mediaBreakpoints = [
useMedia("(max-width: 400px)"),
useMedia("(max-width: 600px)"),
useMedia("(max-width: 3200px)")
];

console.table(mediaBreakpoints);


{mediaBreakpoints.map(
(media, index) => (
<p {...media} {...styles[index]} key={index}>abc</p>
),
)}

    <h3 style={{lineHeight: '2em', wordWrap: "break-word"}}>
*/

export const RemoteCourses = (props) => {
    const paragraphStyle = {
        lineHeight: '2rem',
        fontWeight: 'bolder',
        fontSize: '1.3rem'
    };
    const newLinesToComponents = (HTMLComponentString, styleProp, content) => {
        return content.split('\n').map((lineText, index) => React.createElement(HTMLComponentString, {
            style: styleProp,
            key: index
        }, lineText))
    };

    return <div>
        <h1>{props.label}</h1>
        <Row>
            <Col style={{paddingBottom: '1rem'}} md={12} lg={6}>
                {newLinesToComponents('p', paragraphStyle, props.language.REMOTECOURSES.TEXT1)}
                <h3>
                    <Logo {...LOGOS.GOOGLE}/>
                    <Logo {...LOGOS.SKYPE}/>
                </h3>
                <br/>
            </Col>
            <Col md={12} lg={6}>
                {newLinesToComponents('p', paragraphStyle, props.language.REMOTECOURSES.TEXT2)}
                <h3>
                    <Mailto email='arabu.kalbos@yahoo.com'/>
                </h3>
            </Col>
        </Row>
    </div>
};
export default RemoteCourses;
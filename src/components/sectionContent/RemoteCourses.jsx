import React from "react";
import {LOGOS} from '../../res/Constants'
import Logo from "../logos/Logo";
import Mailto from "../mailto/Mailto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useMediaPredicate} from "react-media-hook";

export const RemoteCourses = (props) => {
    const screensize = useMediaPredicate("(min-width: 400px)");
    const textStyle = {
        lineHeight: screensize ? '2.5rem' : '2rem',
        fontWeight: '600',
        fontSize: screensize ? '1.2rem' : '1.1rem',
    };

    const newLinesToComponents = (HTMLComponentString, styleProp, content) => {
        return content.split('\n').map((lineText, index) => React.createElement(HTMLComponentString, {
            style: styleProp,
            key: index,
        }, lineText))
    };

    return <div>
        {props.label}
        <Row>
            <Col md={12} lg={6}>
                {newLinesToComponents('h4', textStyle, props.language.REMOTECOURSES.TEXT1)}
                <h4 style={textStyle}>
                    <Logo {...LOGOS.GOOGLE}/>
                    <Logo {...LOGOS.SKYPE}/>
                </h4>
            </Col>
            <Col md={12} lg={6}>
                {newLinesToComponents('h4', textStyle, props.language.REMOTECOURSES.TEXT2)}
                <h4 style={textStyle}>
                    <Mailto email='arabu.kalbos@yahoo.com'/>
                </h4>
            </Col>
        </Row>
    </div>
};
export default RemoteCourses;
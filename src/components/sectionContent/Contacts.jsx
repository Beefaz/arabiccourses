import React from "react";
import Iframe from 'react-iframe';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mailto from "../mailto/Mailto";
import {useMediaPredicate} from "react-media-hook";

const Contacts = (props) => {
    const screenSM = useMediaPredicate("(min-width: 784px)");
    const screenMD = useMediaPredicate("(max-width: 992px)");
    const containerStyle = {
        display: screenMD ? 'flex' : 'inherit',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '1rem',
        fontWeight: '600',
        fontSize: screenSM ? '1.2rem' : '1.1rem',
        lineHeight: screenSM ? '2.5rem' : '2rem',
        ...props.language.STYLES.TEXTDIRECTION
    };
    const containerChildStyle ={
        paddingBottom: screenSM ? '1.5rem' : '0.5rem',
    };
    const bolder={
        fontWeight: '700',
        margin: '0',
    };

    return <Row>
        <Col md={12} lg={4}>
            {props.label}
            <div style={containerStyle}>
                <div style={containerChildStyle}>
                    <p style={bolder}>{props.language.EMAIL}</p>
                    <p><Mailto className='text-info' email='arabu.kalbos@yahoo.com'/></p>
                </div>
                <div style={containerChildStyle}>
                    <p style={bolder}>{props.language.ADDRESS}</p>
                    <p>Pakalnės gatvė 13, Vilnius</p>
                </div>
                <div style={containerChildStyle}>
                    <p style={bolder}>{props.language.PHONE}</p>
                    <p style={props.language.STYLES.PHONEDIRECTION}>+370-699-35923</p>
                </div>
            </div>
        </Col>
        <Col md={12} lg={8}>
            <Iframe
                width="100%" height="415" frameBorder="0" style={{border: '0'}} allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.328846794166!2d25.260691750406288!3d54.68624058110968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940bcdfe11b7%3A0xd7762c4fdab4539d!2sPakaln%C4%97s%20g.%2013%2C%20Vilnius%2001112!5e0!3m2!1sen!2slt!4v1598639162697!5m2!1sen!2slt"/>
        </Col>
    </Row>
};
export default Contacts;
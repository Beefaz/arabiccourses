import React from "react";
import Iframe from 'react-iframe';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mailto from "../mailto/Mailto";

const Contacts = (props) => {
    const textStyle = {
        lineHeight: '3rem',
        fontWeight: 'bolder',
        fontSize: '1.3rem'
    };

    return <div>
        <Row>
            <Col style={{paddingBottom: '1rem'}} md={12} lg={4}>
                <h1>{props.label}</h1>
                <p style={textStyle}>{props.language.EMAIL}<br/>
                    <Mailto email='arabu.kalbos@yahoo.com'/><br/>
                    {props.language.ADDRESS}<br/>
                    Pakalnės gatvė 13, Vilnius, Lithuania
                </p>
            </Col>
            <Col md={12} lg={8}>
                <Iframe
                    width="100%" height="415" frameBorder="0" style={{border: '0'}} allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.328846794166!2d25.260691750406288!3d54.68624058110968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940bcdfe11b7%3A0xd7762c4fdab4539d!2sPakaln%C4%97s%20g.%2013%2C%20Vilnius%2001112!5e0!3m2!1sen!2slt!4v1598639162697!5m2!1sen!2slt"/>
            </Col>
        </Row>
    </div>
};
export default Contacts;
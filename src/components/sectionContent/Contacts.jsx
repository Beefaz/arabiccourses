import React from "react";
import loadable$3 from "@loadable/component";
import {Row, Col} from "react-bootstrap"
import Mailto from "../mailto/Mailto";
import {useMediaPredicate} from "react-media-hook";
const IframeBlock =  loadable$3(() => import("../iframeBlock/IframeBlock"));

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
        ...props.language.STYLES.TEXTDIRECTION,
    };

    const bolder = {
        fontWeight: '700',
        margin: '0',
    };

    const iframeStyle = {
        border: '0',
        minWidth: screenMD ? 'unset' : '530px',
    };

    return <div>
            {props.label}
            <Row style={{gap: '1rem'}}>
        <Col md={12} lg={"auto"}>
            <div style={containerStyle}>
                <div>
                    <p style={bolder}>{props.language.ADDRESS}</p>
                    <p>Pakalnės gatvė 13, Vilnius</p>
                </div>
                <div>
                    <p style={bolder}>{props.language.PHONE}</p>
                    <p style={props.language.STYLES.PHONEDIRECTION}>+370-699-35923</p>
                </div>
                <div>
                    <p style={bolder}>{props.language.EMAIL}</p>
                    <p><Mailto className='text-info' email='arabu.kalbos@yahoo.com'/></p>
                </div>
                <div>
                    <p style={bolder}>{props.language.FB}</p>
                    <p> <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61573634466201">{props.language.JOIN}</a></p>
                </div>
            </div>
        </Col>
        <Col md={12} lg={"auto"}>
            <IframeBlock style={iframeStyle}
                         title='Google Maps Location'
                         url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.329022990831!2d25.26069711572923!3d54.686237480281605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd95cbe2c030dd%3A0xb274ef6f727ea280!2sArabic!5e0!3m2!1slt!2slt!4v1606313714300!5m2!1slt!2slt"/>
        </Col>
    </Row>
    </div>
};
export default Contacts;

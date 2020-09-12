import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import SectionContentLoader from "../sectionContent/SectionContentLoader";

const Section = (props) => {
    const containerStyle = {
        paddingTop: '6rem'
    };
    const sectionStyle = {
        backgroundColor: 'rgba(226,157,73,0.8)',
        borderRadius: '25px',
        margin: '2rem',
        padding: '3rem',
    };
    return <div style={containerStyle}>
        <Jumbotron fluid style={sectionStyle}>
            <SectionContentLoader label={props.label}
                                  index={props.index}
                                  language={props.language}/>
        </Jumbotron>
    </div>
};
export default Section;
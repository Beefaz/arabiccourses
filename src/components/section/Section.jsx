import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import SectionContentLoader from "../sectionContent/SectionContentLoader";
import {useMediaPredicate} from "react-media-hook";

const Section = (props) => {
    const setSectionLabel = () => <h3 className='dark' style={{paddingBottom:'1rem'}}>{props.label}</h3>;
    const screensize = useMediaPredicate("(min-width: 500px)");

    const containerStyle = {
        paddingTop: '5.5rem'
    };

    const sectionStyle = {
        backgroundColor: 'rgba(226,157,73,0.9)',
        borderRadius: '25px',
        margin: screensize ? '2rem' : '1rem',
        padding: screensize ? '3rem' : '1rem',
    };

    return <div style={containerStyle}>
        <Jumbotron fluid style={sectionStyle}>
            <SectionContentLoader label={setSectionLabel()}
                                  index={props.index}
                                  language={props.language}/>
        </Jumbotron>
    </div>
};
export default Section;
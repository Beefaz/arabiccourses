import React from "react";
import SectionContentLoader from "../sectionContent/SectionContentLoader";
import {useMediaPredicate} from "react-media-hook";

const Section = (props) => {
    const sectionLabelStyle = {
        fontWeight: '900',
        paddingBottom: '1rem',
        ...props.language.STYLES.TEXTDIRECTION
    };

    const setSectionLabel = () => <h3 className='dark' style={sectionLabelStyle}>{props.label}</h3>;
    const screensize = useMediaPredicate("(min-width: 500px)");

    const sectionStyle = {
        width: '100%',
        backgroundColor: 'rgba(226,157,73,0.9)',
        borderRadius: '25px',
        margin: screensize ? '2rem' : '1rem',
        padding: screensize ? '3rem' : '1rem',
        boxShadow: '5px 5px 10px 2px, -5px -5px 10px 2px',
    };

    return <div style={sectionStyle}>
        <SectionContentLoader label={setSectionLabel()}
                              index={props.index}
                              language={props.language}/>
    </div>
};
export default Section;
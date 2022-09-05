import React from "react";
import SectionContentLoader from "../sectionContent/SectionContentLoader";
import {useMediaPredicate} from "react-media-hook";

const Section = (props) => {
  const screensize = useMediaPredicate("(min-width: 500px)");
  const setSectionLabel = () => <h3 className='dark' style={sectionLabelStyle}>{props.label}</h3>;

  const sectionLabelStyle = {
    fontWeight: '900',
    marginBottom: screensize? '2rem' : '0.5rem',
    ...props.language.STYLES.TEXTDIRECTION
  };

  const sectionWrapperStyle = {
    width: '100%',
    margin: screensize ? '88px auto 2rem auto' : '88px 1rem 1rem 1rem',
    padding: screensize ? '2rem' : '2rem 0',
  }
  const sectionStyle = {
    backgroundColor: 'rgba(226,157,73,0.9)',
    borderRadius: '25px',
    maxWidth: 'max-content',
    padding: screensize ? '3rem' : '1rem',
    boxShadow: '5px 5px 10px 2px, -5px -5px 10px 2px',
    margin: '0 auto'
  };

  return <div style={sectionWrapperStyle}>
    <div style={sectionStyle}>
      <SectionContentLoader label={setSectionLabel()}
                            index={props.index}
                            language={props.language}/>
    </div>
  </div>
};
export default Section;

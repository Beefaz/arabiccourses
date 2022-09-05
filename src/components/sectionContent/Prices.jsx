import React from "react";
import {useMediaPredicate} from "react-media-hook"
import {newLinesToComponents} from "../../res/Constants";

const AboutUs = (props) => {
  const screensize = useMediaPredicate("(min-width: 400px)");

  const textStyle = {
    lineHeight: screensize ? '2.5rem' : '2rem',
    fontWeight: '600',
    fontSize: screensize ? '1.2rem' : '1.1rem',
    ...props.language.STYLES.TEXTDIRECTION,
  };

  return <div style={{display: 'inline-block', width: '100%'}}>
    {props.label}
    {newLinesToComponents('p', textStyle, props.language.PRICES)}
  </div>
};
export default AboutUs;

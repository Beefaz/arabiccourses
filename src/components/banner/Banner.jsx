import React, {useState} from "react";
import {useMediaPredicate} from "react-media-hook";

const Banner = (props) => {
  const [bannerIsHovered, setBannerIsHovered] = useState(false);
  const [bannerIsClosed, setBannerIsClosed] = useState(sessionStorage.getItem('bannerClosed') ?? false);
  const screensize = useMediaPredicate("(min-width: 500px)");

  const sectionStyle = {
    backgroundColor: 'rgba(226,157,73,0.9)',
    borderRadius: '25px',
    width: '100%',
    padding: screensize ? '3rem' : '1rem',
    boxShadow: '5px 5px 10px 2px, -5px -5px 10px 2px',
    margin: '0 auto',
    position: 'absolute',
    left: '0',
    right: '0',
    zIndex: '1',
    textAlign: 'center',
    fontSize: '1.25rem'
  };

  const bannerTextStyle = {
    pointerEvents: 'none',
  };

  const bannerLinkStyle = {
    cursor: 'pointer',
  };

  const svgStyle = {
    position: 'absolute',
    height: screensize ? '2rem' : '1rem',
    width: screensize ? '2rem' : '1rem',
    right: '10px',
    top: '10px',
    cursor: 'pointer',
    fill: bannerIsHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,1)',
  };

  const getBannerContent = () => Object.values(props.language.BANNER).map((item, index) => {
    return !item.url
      ? <span key={index} style={bannerTextStyle}>{item.toString()}</span>
      : <a key={index} href={item.url} style={bannerLinkStyle}>{item.text}</a>
  });

  const closeBanner = () => {
    sessionStorage.setItem('bannerClosed', 'true');
    setBannerIsClosed(true);
  };

  return <div style={{margin: '0 2px', position: 'relative', display: 'flex'}}>
    {!bannerIsClosed &&
    <div style={sectionStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon"
           style={svgStyle}
           viewBox="0 0 1024 1024" version="1.1"
           onClick={() => closeBanner()}
           onMouseEnter={() => setBannerIsHovered(true)}
           onMouseLeave={() => setBannerIsHovered(false)}>
        >
        <path
          d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
      </svg>
      {getBannerContent()}
    </div>
    }
  </div>
};
export default Banner;

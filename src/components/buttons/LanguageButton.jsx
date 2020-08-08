import React from "react";
import arabic from "../../res/img/arabicLogo.png"
import ltflag from "../../res/img/ltflag.png"
import ukflag from "../../res/img/ukflag.png"


const DefaultButton = (props) => {
        const buttonStyle = {
            ...props.style,
            width: '4vw',
            height: '3vw',
            color: 'black',
            borderRadius: '50%',
            backgroundColor: 'white',
            cursor: 'pointer',
            borderInline: 'true',
            fontWeight: 'bold',
            fontSize: '1vw',
            textAlign: 'center',
        };
        const imgStyle = {
          height: '1vw',
          position: 'absolute'
        };
        if (props.buttonText === 'AR') {
            return <button style={buttonStyle} onClick={props.onClick}><img style={imgStyle} src={arabic} alt=""/>
            </button>
        } else if (props.buttonText === 'EN') {
            return <button style={buttonStyle} onClick={props.onClick}><img style={imgStyle} src={ukflag}
                                                                            alt=""/><p>{props.buttonText}</p></button>
        } else {
            return <button style={buttonStyle} onClick={props.onClick}><img style={imgStyle} src={ltflag}
                                                                            alt=""/><p>{props.buttonText} /p></button>
        }
    }
;
export default DefaultButton;
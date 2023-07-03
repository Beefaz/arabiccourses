import React from "react";
import loadable$2 from "@loadable/component";
import {Row, Col} from "react-bootstrap";
import {youtubeURLs} from "../../res/Constants";
const IframeBlock = loadable$2(() => import("../iframeBlock/IframeBlock"));

const Lessons = (props) => {
    const colStyle = {
        padding: '1rem',
    };
    return <div>
        {props.label}
        <Row>
            {youtubeURLs.map((url, key)=>
                <Col xs={12} md={6} lg={4} style={colStyle} key={`video${key}`} >
                  <IframeBlock url={`https://www.youtube.com/embed/${url}`}/>
                </Col>
            )}
        </Row>
    </div>
};
export default Lessons;

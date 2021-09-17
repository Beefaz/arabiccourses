import React from "react";
import loadable$2 from "@loadable/component";
import {Row, Col} from "react-bootstrap";

const IframeBlock = loadable$2(() => import("../iframeBlock/IframeBlock"));

const Lessons = (props) => {
    const colStyle = {
        padding: '1rem',
    };
    const youtubeURLs = [
        '4ybn3kKuu3I',
        '9wv33WQdqOs',
        'QqkuP_i9IsU',
        'vcQNGeUj8C4',
        'PxDTTD6aK5M',
        '3r_h8FOABys'
    ];
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

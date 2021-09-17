import React from "react";
import loadable$2 from "@loadable/component";
import {Row, Col} from "react-bootstrap";

const IframeBlock = loadable$2(() => import("../iframeBlock/IframeBlock"));

const Lessons = (props) => {
    const colStyle = {
        padding: '1rem',
    };
    return <div>
        {props.label}
        <Row>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Promo' url={'https://www.youtube.com/embed/4ybn3kKuu3I'}/>
            </Col>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Promo' url={'https://www.youtube.com/embed/9wv33WQdqOs'}/>
            </Col>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Lesson' url={'https://www.youtube.com/embed/QqkuP_i9IsU'}/>
            </Col>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Lesson' url={'https://www.youtube.com/embed/vcQNGeUj8C4'}/>
            </Col>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Lesson' url={'https://www.youtube.com/embed/PxDTTD6aK5M'}/>
            </Col>
            <Col xs={12} md={6} lg={4} style={colStyle} >
                <IframeBlock title='Lesson' url={'https://www.youtube.com/embed/3r_h8FOABys'}/>
            </Col>
        </Row>
    </div>
};
export default Lessons;

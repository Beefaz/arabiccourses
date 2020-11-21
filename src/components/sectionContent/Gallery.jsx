import React, {useState} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GalleryModal from "./GalleryModal.jsx";
import {GALLERY_IMAGES} from "../../res/Constants"


const Gallery = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0'
    };
    const colStyle = {
        padding: '0.4rem',
    };
    const imageWrapperStyle = {
        color: 'red',
        border: '3px',
        borderStyle: 'outset',
        borderColor: 'rgba(226,157,73,1)',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        cursor: 'pointer',
        borderRadius: '10%',
    };
    const imageStyle = {
        borderRadius: '10%',
        borderStyle: 'none',
        padding: '1px'
    };

    return <div>
        {props.label}
        <GalleryModal
            images={GALLERY_IMAGES}
            modalShow={modalShow}
            setModalShow={setModalShow}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}/>
        <Row style={rowStyle}>
            {GALLERY_IMAGES.map(
                (image, index) => (
                    <Col xs={4} sm={3} md={2} lg={1} key={index} style={colStyle}>
                        <div style={imageWrapperStyle}
                             onMouseOver={(e) => e.currentTarget.style.borderStyle = 'inset'}
                             onMouseOut={(e) => e.currentTarget.style.borderStyle = 'outset'}>
                            <Image src={image}
                                   alt=""
                                   thumbnail
                                   style={imageStyle}
                                   onClick={() => {
                                       setModalShow(true);
                                       setImageIndex(index)
                                   }}/>
                        </div>
                    </Col>
                ),
            )}
        </Row>
    </div>
};
export default Gallery;
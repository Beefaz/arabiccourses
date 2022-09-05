import React, {useState} from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GalleryModal from "./GalleryModal.jsx";
import {GALLERY_IMAGES} from "../../res/Constants"


const Gallery = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const openCarousel = (e) => {
        e.preventDefault();
        return (e.key === 'Enter' || e.key === ' ') && setModalShow(true);
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0'
    };
    const colStyle = {
        padding: '0.4rem',
    };
    const imageWrapperStyle = {
        boxShadow: '1px 1px 5px 1px #000, -1px -1px 5px 1px #000',
        border: '3px',
        borderStyle: 'inset',
        padding: '3px',
        backgroundColor: 'rgba(226,157,73,1)',
        borderColor: 'rgba(226,157,73,1)',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        cursor: 'pointer',
        borderRadius: '10%',
        overflow: 'hidden',
    };
    const imageStyle = {
        height: '100%',
        width: '100%',
        padding: '0',
        margin: 'auto',
        border: '0',
        borderRadius: '10%',
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
                    <Col xs={4} sm={3} md={3} lg={2} key={index} style={colStyle}>
                        <button style={imageWrapperStyle}
                                onKeyPress={(e => openCarousel(e))}
                                onMouseOver={(e) => e.currentTarget.style.borderStyle = 'inset'}
                                onMouseOut={(e) => e.currentTarget.style.borderStyle = 'outset'}
                                aria-label={'imageThumbnail'.concat(index.toString())}>
                            <Image src={image}
                                   alt=""
                                   thumbnail
                                   style={imageStyle}
                                   onClick={() => {
                                       setModalShow(true);
                                       setImageIndex(index)
                                   }}/>
                        </button>
                    </Col>
                ),
            )}
        </Row>
    </div>
};
export default Gallery;

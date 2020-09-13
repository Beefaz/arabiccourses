import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const GalleryModalContent = (props) => {
    const carouselStyle = {
        textAlign: 'center'
    };
    const imageStyle = {
        width: '100%'
    };
    const arrowStyle = {
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,1)',
        padding: '5px'
    };

    const carouselParams = {
        activeIndex: props.imageIndex,
        onSelect: props.setImageIndex,
        fade: true,
        interval: 5000,
        prevIcon: <span aria-hidden="true"
                        className="carousel-control-prev-icon"
                        style={arrowStyle}/>,
        nextIcon: <span aria-hidden="true"
                        className="carousel-control-next-icon"
                        style={arrowStyle}/>
    };

    return <Carousel {...carouselParams}>
        {props.images.map(
            (image, index) => (
                <Carousel.Item style={carouselStyle} key={index}>
                    <Image style={imageStyle}
                           src={image}
                           alt=""
                    />
                </Carousel.Item>
            ),
        )}
    </Carousel>
};
export default GalleryModalContent;
import React from "react";
import GalleryModalContent from "./GalleryModalContent.jsx";
import Modal from "react-bootstrap/Modal";

const GalleryModal = (props) => {
    return <Modal dialogClassName="modal-100w"
                  size='lg'
                  show={props.modalShow}
                  onHide={() => props.setModalShow(false)}
                  centered>
        <GalleryModalContent {...props}/>
    </Modal>
};
export default GalleryModal;
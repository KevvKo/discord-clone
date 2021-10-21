import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Modal } from 'react-bootstrap';
function FormModal(props){
    return(
        <Modal centered show={ props.show } onHide={props.handleOnHide} >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto' data-testid='xyz'>
                    { props.modalTitle }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                { props.children }
            </Modal.Body>
            { props.footerChildren &&
                <Modal.Footer>
                    { props.footerChildren}
                </Modal.Footer>
            }
        </Modal>
 
    );
}

export default FormModal;

FormModal.defaultProps = {
    show: false
};

FormModal.propTypes = {
    children: PropTypes.node,
    footerChildren: PropTypes.element,
    show: PropTypes.bool,
    handleOnHide: PropTypes.func,
    modalTitle: PropTypes.string
};
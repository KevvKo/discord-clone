import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Modal } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function FormModal(props){
    const [ t ] = useTranslation('common');

    return(
        <Modal centered show={ props.show } onHide={props.handleOnHide} >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
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
    children: PropTypes.element,
    footerChildren: PropTypes.element,
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool,
    handleOnHide: PropTypes.func,
    modalTitle: PropTypes.string
};
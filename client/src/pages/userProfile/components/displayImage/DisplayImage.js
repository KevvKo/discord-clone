import React from 'react';
import PropTypes from 'prop-types'; 
// Components
import { Modal } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function DisplayImage(props){

    const [ t ] = useTranslation('common');

    return(
        <Modal 
            dialogClassName="avatar-modal p-4"
            size='sm' 
            centered 
            show={ props.show } 
            onHide={ props.handleHide }
        >
            <Modal.Header className='ml-3 px-0 pb-0'>
                { t('settings.main.userProfile.selectImage')}
            </Modal.Header>
            <Modal.Body className='d-flex px-0 justify-content-center'>
            
            </Modal.Body>
        </Modal>
    );
}

DisplayImage.defaultProps = {
    show: false
};

DisplayImage.propTypes = {
    show: PropTypes.bool,
    handleHide: PropTypes.func
};

export default DisplayImage;
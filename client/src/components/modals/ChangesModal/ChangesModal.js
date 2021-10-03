import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Modal, Button } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function FormModal(props){

    const [ t ] = useTranslation('common');
    return(
        <Modal centered show={ props.show } onHide={props.handleOnHide} >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <p>{t('settings.main.userProfile.unsaved')}</p>
                <Button variant='link'>{t('settings.main.userProfile.reset')}</Button>
                <Button variant='success'>{t('settings.main.userProfile.saveChanges')}</Button>
            </Modal.Body>
        </Modal>
 
    );
}

export default FormModal;

FormModal.defaultProps = {
    show: false
};

FormModal.propTypes = {
    show: PropTypes.bool,
    handleOnHide: PropTypes.func,

};
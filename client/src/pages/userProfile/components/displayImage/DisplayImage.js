import React from 'react';
import './DisplayImage.css';
import PropTypes from 'prop-types'; 
// Components
import { Button, Modal, Form } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function DisplayImage(props){

    const [ t ] = useTranslation('common');

    return(
        <Modal
            className='display-image' 
            dialogClassName="avatar-modal p-4"
            centered 
            show={ true } 
            onHide={ props.handleHide }
        >
            <Modal.Header className='ml-3 px-0 pb-0'>
                {t('settings.main.userProfile.editImage')}
            </Modal.Header>
            <Modal.Body className='d-flex px-0 justify-content-center'>
                <img src='' />
                <div id='range-size' className='d-flex'>
                    <i className='bi bi-file-image-fill'></i>
                    <input type='range' />
                    <i className='bi bi-file-image-fill'></i>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex'>
                <Button className='mr-auto' variant='link'>{t('settings.main.userProfile.skip')}</Button>
                <Button variant='link'>{t('settings.main.userProfile.cancel')}</Button>
                <Button>{t('settings.main.userProfile.confirm')}</Button>
            </Modal.Footer>
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
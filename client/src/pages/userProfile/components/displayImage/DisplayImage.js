import React from 'react';
import './DisplayImage.css';
import PropTypes from 'prop-types'; 
// Components
import { Button, Modal } from 'react-bootstrap';
import ExmapleAvatar from '../../../../assets/img/person-circle.svg';
import ImageSlider from '../ImageSlider/ImageSlider';
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
            <Modal.Body className='d-flex flex-column px-0 justify-content-center'>
                <div className='d-flex justify-content-center'>
                    <img src={ ExmapleAvatar} />
                </div>
                <div id='range-size' className='d-flex'>
                    <i className='bi bi-file-image-fill'></i>
                    <ImageSlider />
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
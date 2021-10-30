import React from 'react';
import './DisplayImage.css';
import PropTypes from 'prop-types'; 
// Components
import { Button, Modal } from 'react-bootstrap';
import ExampleAvatar from '../../../../assets/img/person-circle.svg';
import ImageSlider from '../ImageSlider/ImageSlider';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
function DisplayImage(props){

    const [ t ] = useTranslation('common');
    const [imageSize, setImageSize] = useState(0);

    const handleChange = (e) => {
        setImageSize(e.target.value);
    };

    const handleClick = () => {
        props.callback();
    };

    const handleSubmit = () => {
        props.callback();
    };

    return(
        <Modal
            className='display-image' 
            dialogClassName="avatar-modal p-4"
            centered 
            show={ props.show } 
            onHide={ props.callback }
        >
            <Modal.Header className='ml-3 px-0 pb-0'>
                {t('settings.main.userProfile.editImage')}
            </Modal.Header>
            <Modal.Body className='d-flex flex-column px-0 justify-content-center'>
                <div id='image-container' className='d-flex mx-3 mb-3 justify-content-center align-items-center overflow-hidden'>
                    <img src={ ExampleAvatar} width={`${ 280 * ( 1 + imageSize/100)}px`} height={`${ 280 * ( 1 + imageSize/100)}px`} />
                    <div id='avatar-showcase' className='position-absolute'>
                    </div>
                </div>
                <div id='range-size' className='d-flex'>
                    <i className='bi bi-file-image-fill'></i>
                    <ImageSlider value={imageSize} onChange={ handleChange } />
                    <i className='bi bi-file-image-fill'></i>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex'>
                <Button 
                    onClick={ handleClick } 
                    className='mr-auto' 
                    variant='link'
                >{t('settings.main.userProfile.skip')}
                </Button>
                <Button 
                    onClick={ props.callback } 
                    variant='link'
                >{t('settings.main.userProfile.cancel')}
                </Button>
                <Button onClick={ handleSubmit }>{t('settings.main.userProfile.confirm')}</Button>
            </Modal.Footer>
        </Modal>
    );
}

DisplayImage.defaultProps = {
    show: false
};

DisplayImage.propTypes = {
    show: PropTypes.bool,
    callback: PropTypes.func,
};

export default DisplayImage;
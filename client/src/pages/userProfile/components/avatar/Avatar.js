import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';
// Components
import { Button, Modal } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
function Avatar(){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };

    return(
        <div className='Avatar mb-5'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.avatar')}
            </div>
            <Button className='mr-2' size='sm' onClick={ handleShow }>               
                {t('settings.main.userProfile.changeAvatar')}
            </Button>
            <Button variant='link' size='sm'>
                {t('settings.main.userProfile.removeAvatar')}
            </Button>
            <Modal 
                dialogClassName="avatar-modal p-4"
                size='sm' centered show={ show } 
                onHide={ handleShow }
            >
                <Modal.Header className='ml-3 px-0 pb-0'>
                    { t('settings.main.userProfile.selectImage')}
                </Modal.Header>
                <Modal.Body className='d-flex px-0 justify-content-center'>
                    <form className='position-relative' encType='multipart/form-data' action="/upload">
                        <div className='position-absolute d-flex justify-content-center align-items-start'>
                            <div className='d-flex flex-column align-self-center'> 
                                <i className="bi bi-file-arrow-up"></i>
                                <span>{t('settings.main.userProfile.uploadFile')}</span>
                            </div>
                        </div>
                        <input type='file' />
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

Avatar.prototype = {
    onChange: PropTypes.func
};

export default Avatar;
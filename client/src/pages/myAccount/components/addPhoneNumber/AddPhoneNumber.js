import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button,InputGroup, Form, Modal } from 'react-bootstrap';
// Hooks 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function AddPhoneNumber(){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);
    
    const handleShow = () => {
        show
            ? setShow(false)
            : setShow(true);
    };
    
    return(
        <>
            <div>
                <h6>{ t('settings.main.myAccount.phoneNumber') }</h6>
                <span>{t('settings.main.myAccount.noPhoneNumber')}</span>
            </div>
            <Button onClick={ handleShow } className='ml-auto' variant='secondary'>{t('settings.main.myAccount.add')}</Button>
            <Modal centered show={ show } onHide={handleShow} >
                <Modal.Header className='pb-0' closeButton>
                    <Modal.Title className='ml-auto'>
                        {t('settings.main.myAccount.changePhoneNumber')}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <p className='text-center'>
                        {t('settings.main.myAccount.editPhoneDescriptionI')}
                    </p>
                    <p className='mt-2 text-center'>
                        {t('settings.main.myAccount.editPhoneDescriptionII')}
                    </p>
                    <Form>
                        <InputGroup>
                            <Form.Control type='tel1' ></Form.Control>
                            <Button variant='primary'>  {t('settings.main.myAccount.send')} </Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

AddPhoneNumber.defaultProps = {
    show: false
};

AddPhoneNumber.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool
};
export default AddPhoneNumber;
import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
// Hooks 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function EditUserName(props){

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
                <h6>{ t('settings.main.myAccount.username') }</h6>
                <span>{props.username}</span>
            </div>
            <Button className='ml-auto' variant='secondary' onClick={handleShow}>{t('settings.main.myAccount.edit')}</Button>
            <Modal centered show={ show } onHide={handleShow} >
                <Modal.Header closeButton>
                    <Modal.Title className='ml-auto'>
                        {t('settings.main.myAccount.changeUsername')}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-center'>
                        {t('settings.main.myAccount.editUserDescription')}
                    </p>
                    <Form>
                        <Form.Label>{t('settings.main.myAccount.username')}</Form.Label>
                        <InputGroup size='md'>
                            <Form.Control className='py-3'></Form.Control>
                            <InputGroup.Text className='py-1'>
                                {`#${props.id}`}
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Group>
                            <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                            <Form.Control id="inlineFormInputGroup" ></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='link' onClick={handleShow}>{ t('settings.main.myAccount.cancel') }</Button>
                    <Button variant='primary'>{ t('settings.main.myAccount.ready') }</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

EditUserName.defaultProps = {
    show: false
};

EditUserName.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool
};
export default EditUserName;
import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, Modal } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
function EditPassword(props){

    const [ t ] = useTranslation('common');

    return(
        <Modal centered show={ props.show } onHide={ props.onHide } >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                    {t('settings.main.myAccount.changePassword')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <Form>
                    <Form.Group>
                        <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                        <Form.Control className='py-3'></Form.Control>
                    </Form.Group>    
                    <Form.Group>
                        <Form.Label>{t('settings.main.myAccount.newPassword')}</Form.Label>
                        <Form.Control ></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='link' onClick={props.onHide}>{ t('settings.main.myAccount.cancel') }</Button>
                <Button variant='primary'>{ t('settings.main.myAccount.ready') }</Button>
            </Modal.Footer>
        </Modal>
    );
}

EditPassword.defaultProps = {
    show: false
};

EditPassword.propTypes = {
    onHide: PropTypes.func,
    show: PropTypes.bool
};
export default EditPassword;
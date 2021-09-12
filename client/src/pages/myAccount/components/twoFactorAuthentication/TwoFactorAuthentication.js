import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, Modal } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
function TwoFactorAuthentication(props){

    const [ t ] = useTranslation('common');

    return(
        <Modal centered show={ props.show } onHide={ props.onHide } >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                    {t('settings.main.myAccount.activateTwoFactor')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='py-0'>
                <Form>
                    <Form.Group>
                        <Form.Label>{t('settings.main.myAccount.password')}</Form.Label>
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

TwoFactorAuthentication.defaultProps = {
    show: false
};

TwoFactorAuthentication.propTypes = {
    onHide: PropTypes.func,
    show: PropTypes.bool
};
export default TwoFactorAuthentication;
import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, Modal } from 'react-bootstrap';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useTranslation } from 'react-i18next';
function TwoFactorAuthentication(props){

    const [ t ] = useTranslation('common');
    const buttons = (
        <>
            <Button variant='link' onClick={props.onHide}>{ t('settings.main.myAccount.cancel') }</Button>
            <Button variant='primary'>{ t('settings.main.myAccount.ready') }</Button>
        </>
    );

    return(
        <FormModal modalTitle={t('settings.main.myAccount.activateTwoFactor')} show={ props.show } handleOnHide={ props.onHide } footerChildren={ buttons }>
            <Form>
                <Form.Group>
                    <Form.Label>{t('settings.main.myAccount.password')}</Form.Label>
                    <Form.Control ></Form.Control>
                </Form.Group>
            </Form>
        </FormModal>
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
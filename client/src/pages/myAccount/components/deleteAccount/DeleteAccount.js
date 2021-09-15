import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, Modal } from 'react-bootstrap';
import FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';

// Hooks 
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import useForm from '../../../../hooks/useForm';
// Utilities
import { DELETE_ACCOUNT } from '../../../../graphql/mutations';

function DeleteAccount(props){

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const { 
        errors,  
        validateErrors
    } = useForm();
    const [ t ] = useTranslation('common');
    const [ deleteAccount ] = useMutation(DELETE_ACCOUNT, {

        onCompleted: () => {
            localStorage.removeItem( AUTH_TOKEN );
            window.location.reload();
        }, 
        onError: (error) => {
            alert(error);
        }            
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const isValid = validateErrors(e.target);
        const { password } = form;
        if(isValid){
            deleteAccount({
                variables: {
                    password: password.value
                }
            });
        }
    };

    return(
        <Modal centered show={ props.show } onHide={ props.callback } >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                    {t('settings.main.myAccount.deleteAccount')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <p>{t('settings.main.myAccount.deleteAccountDescription')}</p>
                <Form  onSubmit={handleSubmit}>
                    <Form.Group>
                        <FormFeedback error={ errors.password }>   
                            <Form.Label>{t('settings.main.myAccount.password')}</Form.Label>
                            <Form.Control isInvalid={ !!errors.password } name='password' type='password'></Form.Control>
                        </FormFeedback>
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant='link' onClick={props.callback}>{ t('settings.main.myAccount.cancel') }</Button>
                        <Button variant='primary' type='submit' >{ t('settings.main.myAccount.continue') }</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

DeleteAccount.defaultProps = {
    show: false
};

DeleteAccount.propTypes = {
    callback: PropTypes.func,
    show: PropTypes.bool
};
export default DeleteAccount;
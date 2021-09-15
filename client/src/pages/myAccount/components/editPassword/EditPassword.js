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
import { CHANGE_PASSWORD } from '../../../../graphql/mutations';

function EditPassword(props){

    const [ t ] = useTranslation('common');
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    const [ changePassword ] = useMutation(CHANGE_PASSWORD, {
        onCompleted: () => {
            props.onHide();
        }, 
        onError: (error) => {
            if(error){ 
                setErrors({
                    username: error.message,
                    password: error.message
                });
            }
            return;
        }            
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const isValid = validateErrors(e.target);
        const { newPassword, password } = form;
        if(isValid){
            changePassword({
                variables: {
                    newPassword: newPassword.value,
                    password: password.value
                }
            });
        }
    };

    return(
        <Modal centered show={ props.show } onHide={ props.onHide } >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                    {t('settings.main.myAccount.changePassword')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <FormFeedback error={ errors.password }>   
                            <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                            <Form.Control isInvalid={ !!errors.password } name='password' type='password' className='py-3'></Form.Control>
                        </FormFeedback>
                    </Form.Group>    
                    <Form.Group>
                        <FormFeedback error={ errors.password }>   
                            <Form.Label>{t('settings.main.myAccount.newPassword')}</Form.Label>
                            <Form.Control isInvalid={ !!errors.password } name='newPassword' type='password'></Form.Control>
                        </FormFeedback>
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant='link' onClick={props.onHide}>{ t('settings.main.myAccount.cancel') }</Button>
                        <Button variant='primary' type='submit'>{ t('settings.main.myAccount.ready') }</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
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
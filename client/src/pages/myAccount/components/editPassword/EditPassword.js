import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form } from 'react-bootstrap';
import FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import useForm from '../../../../hooks/useForm';
// Utilities
import { CHANGE_PASSWORD } from '../../../../graphql/user/userMutations';

function EditPassword(props){

    const [ t ] = useTranslation('common');
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    const [ changePassword ] = useMutation(CHANGE_PASSWORD, {
        onCompleted: () => {
            props.handleOnHide();
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
        <FormModal show={ props.show } handleOnHide={ props.handleOnHide } modalTitle={t('settings.main.myAccount.changePassword')}>
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
                    <Button variant='link' onClick={props.handleOnHide}>{ t('settings.main.myAccount.cancel') }</Button>
                    <Button variant='primary' type='submit'>{ t('settings.main.myAccount.ready') }</Button>
                </Form.Group>
            </Form>
        </FormModal>
    );
}

EditPassword.defaultProps = {
    show: false
};

EditPassword.propTypes = {
    handleOnHide: PropTypes.func,
    show: PropTypes.bool
};
export default EditPassword;
import React from 'react';

// Components
import { Form, Button } from 'react-bootstrap';
import  FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';
import { Link } from 'react-router-dom';

// Hooks
import { useTranslation } from 'react-i18next';
import useAuth from '../../../../hooks/useAuthentification';
import useForm from '../../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// mutations
import { SET_USER_STATUS_MUTATION } from '../../../../graphql/mutations';

function LoginForm(){

    const [ setUserStatus ] = useMutation(SET_USER_STATUS_MUTATION, {
        variables: {
            status: true
        },
        onCompleted: () => {
            history.replace({
                pathname: '/home'
            });
        },
        onError: (error) => {
            console.log(error);
        }
    });
    const [ t ] = useTranslation('common');
    const history = useHistory();
    const { 
        login,
        handleChange 
    } = useAuth();
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateErrors(e.target);

        if(isValid){
            login()
                .then(
                    ({errors}) => { 
                        errors ?
                            setErrors({
                                email: errors.message,
                                password: errors.message
                            }) 
                            :
                            setUserStatus();
                    });
        }
    };

    return (
        <Form noValidate onSubmit={ handleSubmit }>
            <FormFeedback error={errors.email}>
                <Form.Label>
                    {t('login.emailLabel')}                       
                </Form.Label>
                <Form.Control isInvalid={ !!errors.email } onChange={ handleChange } name='email' type='text'></Form.Control>
            </FormFeedback>    
            <FormFeedback error={errors.password}>
                <Form.Label>
                    {t('login.passwordLabel')}
                </Form.Label>
                <Form.Control isInvalid={ !!errors.password } onChange={ handleChange } name='password' type='password'></Form.Control>
            </FormFeedback>         
            <Form.Text>
                <Link to='/newPassword'>
                    {t('login.newPassword')}
                </Link>
            </Form.Text>
            <Button variant='primary' type='submit' block>
                {t('login.submit')}
            </Button> 
            <p className='mt-2'>
                {t('login.registrationQuestion')} <Link to='/registration'>{t('login.registration')}</Link>
            </p>
        </Form>
    );
}

export default LoginForm;
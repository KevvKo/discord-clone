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
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

//Utilites
import { USERNAME_QUERY } from '../../../../graphql/query';

function LoginForm(){

    const [ t ] = useTranslation('common');
    const history = useHistory();
    const { data } = useQuery( USERNAME_QUERY );
    let active;
    const { 
        login,
        handleChange 
    } = useAuth();
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    useEffect(() => {
        if(data) active = data.active;

    }, [ data, active]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateErrors(e.target);
       
        if(!active){
            console.log(active);
            setErrors(' Your account is deactivated');
            return;
        }

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
                            history.replace({
                                pathname: '/home'
                            });
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
            <Button variant='secondary' type='submit' block>
                {t('login.submit')}
            </Button> 
            <p className='mt-2'>
                {t('login.registrationQuestion')} <Link to='/registration'>{t('login.registration')}</Link>
            </p>
        </Form>
    );
}

export default LoginForm;
import React from 'react';
import './Registration.css';

// Components
import { 
    Row, 
    Col, 
    Form
} from 'react-bootstrap';
import FormFeedback from '../../components/forms/formFeedback/FormFeedback';
import RegistrationSubmit from './components/RegistrationSubmit/RegistrationSubmit';
import RegistrationDateSelection from './components/RegistrationDataSelection/RegistrationDateSelection';
import {Link} from 'react-router-dom';

// hooks
import useAuth from '../../hooks/useAuthentification';
import useForm from '../../hooks/useForm';
import {useTranslation} from 'react-i18next';
import { useHistory } from 'react-router-dom';
/**
 * @todo implement birthday handlig for sing up process -> after the update for the database model
 * @param {} props 
 * @returns 
 */
function Registration(){

    const [t] = useTranslation('common');
    const { 
        errors,
        setErrors,
        validateErrors, 
        handleTerms, 
        checked
    } = useForm();
    const { 
        handleChange, 
        signup 
    } = useAuth();

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateErrors(e.target);

        if( isValid ){
            signup()
                .then(({errors}) => { 
                    errors ?
                        setErrors({
                            email: errors.message,
                            password: errors.message
                        }) :
                        history.replace({
                            pathname: '/home'
                        });
                });
        }
    };

    return (
        <Row className='registration flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('registration.title')}</h1>
                <Form noValidate onSubmit={handleSubmit}>
                    <FormFeedback error={ errors.email }>
                        <Form.Label>
                            {t('registration.email')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.email } onChange={ handleChange } name="email" type="email"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback error={ errors.name }>
                        <Form.Label>
                            {t('registration.username')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.name } onChange={ handleChange } name="name" type="text"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback error={ errors.password }>
                        <Form.Label>
                            {t('registration.password')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.password } onChange={ handleChange } name="password" type="password"></Form.Control>
                    </FormFeedback>    
                    <Form.Group>
                        <Form.Label>
                            {t('registration.birthday')}
                        </Form.Label>
                        <Row>
                            <RegistrationDateSelection />
                        </Row>
                    </Form.Group>
                    <Form.Row>
                    </Form.Row>
                    <Form.Group>
                        <Form.Check 
                            feedback={errors.terms} 
                            checked={ checked } 
                            isInvalid={ !!errors.terms } 
                            onChange={ handleTerms } 
                            type='checkbox' 
                            name="terms" 
                            label={t('registration.explanation')}
                        />
                    </Form.Group>
                    <RegistrationSubmit checked={ checked } />
                    <p className='mt-2 text-nowrap'>
                        <Link to='/login'>{t('registration.accountAvailable')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    );
}

export default Registration;
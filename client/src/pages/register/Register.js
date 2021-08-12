import React from 'react';
import './Register.css';
import { 
    Row, 
    Col, 
    Form, 
    Button,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import Select from '../../components/forms/select/Select';
import FormFeedback from '../../components/forms/formFeedback/FormFeedback';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import { range } from '../../services/utils';
import useAuth from '../../hooks/useAuthentification';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

/**
 * @todo implement birthday handlig for sing up process -> after the update for the database model
 * @param {} props 
 * @returns 
 */
function Register(){

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
        handleSelect,
        signup 
    } = useAuth();

    const history = useHistory();
    const days = Array.from({length:31}, (v, k) => k+1 );
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const year = new Date().getFullYear();
    const years = range(year, 1900, -1);

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
        <Row className='register flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('register.title')}</h1>
                <Form noValidate onSubmit={handleSubmit}>
                    <FormFeedback error={ errors.email }>
                        <Form.Label>
                            {t('register.email')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.email } onChange={ handleChange } name="email" type="email"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback error={ errors.name }>
                        <Form.Label>
                            {t('register.username')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.name } onChange={ handleChange } name="name" type="text"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback error={ errors.password }>
                        <Form.Label>
                            {t('register.password')}                       
                        </Form.Label>
                        <Form.Control isInvalid={ !!errors.password } onChange={ handleChange } name="password" type="password"></Form.Control>
                    </FormFeedback>    
                    <Form.Group>
                        <Form.Label>
                            {t('register.birthday')}
                        </Form.Label>
                        <Row>
                            <Col>
                                <Select data={days} name={'day'} onChange={ handleSelect }/>
                            </Col>
                            <Col>
                                <Select data={months} name={'month'} onChange={ handleSelect }/>
                            </Col>
                            <Col>
                                <Select data={years} name='year' onChange={ handleSelect }/>
                            </Col>
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
                            label={t('register.explanation')}
                        />
                    </Form.Group>

                    { !checked    // if the terms are not checked, there will be a disabled button with a tooltip or the default button
                        ?
                        <OverlayTrigger
                            placement={'top'}
                            overlay={
                                <Tooltip id={'termsTooltip'}>
                                    {t('error.terms.required')}
                                </Tooltip>
                            }
                        >
                            <Button variant='primary' type="submit" block disabled={ !checked }>
                                {t('register.submit')}
                            </Button> 
                        </OverlayTrigger>
                        :
                        <Button variant='primary' type="submit" block disabled={ !checked }>
                            {t('register.submit')}
                        </Button> 
                    }

                    <p className='mt-2 text-nowrap'>
                        <Link to='/login'>{t('register.accountAvailable')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    );
}

export default Register;
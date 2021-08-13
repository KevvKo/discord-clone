import React from 'react';
import './Registration.css';

// Components
import { 
    Row, 
    Col
} from 'react-bootstrap';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

// hooks
import {useTranslation} from 'react-i18next';
/**
 * @todo implement birthday handlig for sing up process -> after the update for the database model
 * @param {} props 
 * @returns 
 */
function Registration(){

    const [t] = useTranslation('common');


    return (
        <Row className='registration flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('registration.title')}</h1>
                <RegistrationForm />
            </Col>
        </Row>
    );
}

export default Registration;
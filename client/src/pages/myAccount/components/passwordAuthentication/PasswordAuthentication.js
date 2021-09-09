import React from 'react';
import './PasswordAuthentication.css';

// Components
import { Col } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function PasswordAuthentication(){

    const [ t ] = useTranslation('common');

    return(
        <Col className='password-authentication flex-column mt-5 px-4'>
        </Col>
    );
}

export default PasswordAuthentication;
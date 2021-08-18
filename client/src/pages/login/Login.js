import React from 'react';
import './Login.css';
import { 
    Row, 
    Col, 
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from './components/loginForm/LoginForm';
function Login(){

    const [ t ] = useTranslation('common');


    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm={8} md={5}>
                <h1 className='h1'>{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <LoginForm />
            </Col>
        </Row>
    );
}

export default Login;
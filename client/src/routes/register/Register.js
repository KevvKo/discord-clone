import './Register.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Register(props){

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='register flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm ={8}>
                <h1>{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form>
           
                </Form>
            </Col>
        </Row>
    )
}

export default Register
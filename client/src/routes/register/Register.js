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
            <Col className='p-5' sm={8} md={5}>
                <h1>{t('register.title')}</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            {t('register.email')}
                        </Form.Label>
                        <Form.Control type='email'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            {t('register.username')}
                        </Form.Label>
                        <Form.Control type='text'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            {t('register.password')}
                        </Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <Button variant='primary' type='button' block>
                        {t('register.submit')}
                    </Button> 
                    <p className='mt-2'>
                        <Link to='/register'>{t('register.accountAvailable')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    )
}

export default Register
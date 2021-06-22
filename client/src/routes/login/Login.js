import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
    import {useTranslation} from "react-i18next";

function Login(props){

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col sm ={8}>
                <h1>{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            {t('login.emailLabel')}
                        </Form.Label>
                        <Form.Control type="email"></Form.Control>
                        <Form.Label>
                            {t('login.passwordLabel')}
                        </Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type='submit'>
                        {t('login.submit')}
                    </Button>   
                </Form>
            </Col>
        </Row>
    )
}

export default Login
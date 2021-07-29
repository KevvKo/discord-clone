import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import  FormFeedback from '../../components/forms/formFeedback/FormFeedback';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { 
    Link, 
    useHistory
} from "react-router-dom";
import useAuth from '../../hooks/useAuthentification';

function Login(){

    let history = useHistory();
    const { handleChange , login    } = useAuth();
    const [validated, setValidated] = useState(false);
    const [ t ] = useTranslation('common');

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        login()
        .then(() => { 
            history.replace({
                pathname: '/home'
            });
        })
    }

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm={8} md={5}>
                <h1 className="h1">{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                    <FormFeedback>
                        <Form.Label>
                            {t('login.emailLabel')}                       
                        </Form.Label>
                        <Form.Control onChange={ handleChange } name="email" type="text"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback>
                        <Form.Label>
                            {t('login.passwordLabel')}
                        </Form.Label>
                        <Form.Control required onChange={ handleChange } name="password" type="password"></Form.Control>
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
                        {t('login.registerQuestion')} <Link to='/register'>{t('login.register')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    )
}

export default Login
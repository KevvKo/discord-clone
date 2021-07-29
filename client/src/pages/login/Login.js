import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { 
    Link, 
    useHistory
} from "react-router-dom";
import useAuth from '../../hooks/useAuthentification';
import FormInput from '../../components/forms/structure/formInput/FormInput'

function Login(){

    let history = useHistory();
    const { handleChange , login} = useAuth();
    const [validated, setValidated] = useState(false);
    const [t, i18n] = useTranslation('common');

    const errorMessage = 'please enter a valid email address'
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
            // .then(() => { 
            //     history.replace({
            //         pathname: '/home'
            //     });
            // })
    }

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm={8} md={5}>
                <h1 className="h1">{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                    <FormInput error={ errorMessage } type='email' name="email" label={t('login.emailLabel')} onChange={ handleChange } />
                    <Form.Group >
                        <Form.Label>
                            {t('login.passwordLabel')}
                        </Form.Label>
                        <Form.Control required onChange={ handleChange } name="password" type="password"></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Password is required
                        </Form.Control.Feedback>
                        <Form.Text>
                            <Link to='/newPassword'>
                                {t('login.newPassword')}
                            </Link>
                        </Form.Text>
                    </Form.Group>
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
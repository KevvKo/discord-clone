import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client'; 
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../graphql/mutations'
import { 
    Link, 
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../hooks/useAuthentification';
import FormInput from '../../components/forms/structure/formInput/FormInput'

function Login(){

    let history = useHistory();
    let location = useLocation();
    let authentification = useAuth();

    let  { from }  = location.state || { from: { pathname: "/" } };

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });
    
    const [t, i18n] = useTranslation('common');
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token)
            console.log(from)
            history.replace(from);
            history.push(from);

        }
    });
    const onChangeEmail = (e) => {
        setFormState({
            ...formState,
            email: e.target.value
        })
    }

    const onChangePassword = (e) => {
        setFormState({
            ...formState,
            password: e.target.value
        })
    }

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm={8} md={5}>
                <h1 className="h1">{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form>
                    <FormInput type='email' label={t('login.emailLabel')} onChange={ onChangeEmail } />
                    <Form.Group>
                        <Form.Label>
                            {t('login.passwordLabel')}
                        </Form.Label>
                        <Form.Control onChange={ onChangePassword } type="password"></Form.Control>
                        <Form.Text>
                        <Link to='/newPassword'>
                            {t('login.newPassword')}
                        </Link>
                        </Form.Text>
                    </Form.Group>
                    <Button variant='primary' type='button' onClick={ login } block>
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
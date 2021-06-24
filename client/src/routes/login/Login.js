import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { 
    Link, 
    Router,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../hooks/useAuthentification';

function Login(props){
    
    let history = useHistory();
    let location = useLocation();
    let authentification = useAuth();

    let { from } = location.state

    console.log(from)
    let login = () => {
        authentification.signin(() => {
          history.replace(from);
        });
      };

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm ={8}>
                <h1>{t('login.title')}</h1>
                <p>{t('login.subGreetings')}</p>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            {t('login.emailLabel')}
                        </Form.Label>
                        <Form.Control type='email'></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            {t('login.passwordLabel')}
                        </Form.Label>
                        <Form.Control type="password"></Form.Control>
                        <Form.Text>
                        <Link path='/newPassword'>
                            {t('login.newPassword')}
                        </Link>
                        </Form.Text>
                    </Form.Group>
                    <Link to='/Home'>
                        <Button variant='primary' type='submit' onClick={login} block>
                            {t('login.submit')}
                        </Button>  
                    </Link> 
                    <p className='mt-2'>
                        {t('login.registerQuestion')} <Link to='/register'>{t('login.register')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    )
}

export default Login
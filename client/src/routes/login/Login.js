import './Login.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { 
    Link, 
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../hooks/useAuthentification';

function Login(){
    
    let history = useHistory();
    let location = useLocation();
    let authentification = useAuth();

    let  { from }  = location.state || { from: { pathname: "/" } };

    let login = () => {
        authentification.signin(() => {
            history.replace(from);
        });
      };

    const [t, i18n] = useTranslation('common');

    return (
        <Row className='login flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-5' sm={8} md={5}>
                <h1 className="h1">{t('login.title')}</h1>
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
                    <Button variant='primary' type='button' onClick={login} block>
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
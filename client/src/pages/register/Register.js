import './Register.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import Select from '../../components/forms/select/Select';
import FormFeedback from '../../components/forms/formFeedback/FormFeedback'
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import { range } from '../../services/utils';
import useAuth from '../../hooks/useAuthentification';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import {useState } from 'react';

/**
 * @todo implement birthday handlig for sing up process -> after the update for the database model
 * @param {} props 
 * @returns 
 */
function Register(props){

    const [t, i18n] = useTranslation('common');
    const [ validated, setValidated ] = useState(false);
    const [  validateErrors ] = useForm();
    const history = useHistory();
    const { handleChange, signup, user } = useAuth();
    const days = Array.from({length:31}, (v, k) => k+1 )
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const year = new Date().getFullYear();
    const years = range(year, 1900, -1);

    const handleSubmit = (e) => {
        e.preventDefault()
        // validateErrors(e.target)
        // signup()
        // .then(() => {
        //     history.replace({
        //         pathname: '/home'
        //     });
        // })

        setValidated(true)
    };

    return (
        <Row className='register flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('register.title')}</h1>
                <Form noValidate validated={ validated } onSubmit={handleSubmit}>
                    <FormFeedback>
                        <Form.Label>
                            {t('register.email')}                       
                        </Form.Label>
                        <Form.Control required onChange={ handleChange } name="email" type="email"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback>
                        <Form.Label>
                            {t('register.username')}                       
                        </Form.Label>
                        <Form.Control required onChange={ handleChange } name="name" type="text"></Form.Control>
                    </FormFeedback>    
                    <FormFeedback>
                        <Form.Label>
                            {t('register.password')}                       
                        </Form.Label>
                        <Form.Control required onChange={ handleChange } name="password" type="password"></Form.Control>
                    </FormFeedback>    
                    <Form.Group>
                        <Form.Label>
                            {t('register.birthday')}
                        </Form.Label>
                        <Row>
                            <Col>
                                <Select data={days} name={'day'} onChange={ handleChange }/>
                            </Col>
                            <Col>
                                <Select data={months} name={'month'} onChange={ handleChange }/>
                            </Col>
                            <Col>
                                <Select data={years} name='year' onChange={ handleChange }/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Row>
                    </Form.Row>
                    <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check required type='checkbox' inline={true} label={t('register.explanation')}/>
                    </Form.Group>
                    <Button variant='primary' type="submit" block>
                        {t('register.submit')}
                    </Button> 
                    <p className='mt-2 text-nowrap'>
                        <Link to='/login'>{t('register.accountAvailable')}</Link>
                    </p>
                </Form>
            </Col>
        </Row>
    )
}

export default Register
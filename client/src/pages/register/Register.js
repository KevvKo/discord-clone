import './Register.css';
import { 
    Row, 
    Col, 
    Form, 
    Button } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import Select from '../../components/forms/select/Select';
import FormInput from '../../components/forms/structure/formInput/FormInput';
import { range } from '../../services/utils';
import useState from 'react';
import { useForm } from '../../hooks/useForm';

function Register(props){

    const [t, i18n] = useTranslation('common');
    const initialeValues = {
        email: '',
        username: '',
        password: '',
        day: '',
        month: '',
        year: ''
    }

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

    const { values, handleChange, handleSubmit } = useForm(initialeValues);

    const year = new Date().getFullYear();
    const years = range(year, 1900, -1);

    return (
        <Row className='register flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('register.title')}</h1>
                <Form onSubmit={ handleSubmit }>
                    <FormInput type='email' name='email' label={t('register.email')} onChange={ handleChange } value={ values.email }/>
                    <FormInput type='text' name='username' label={t('register.username')} onChange={ handleChange }/>
                    <FormInput type='password' name='password' label={t('register.password')} onChange={ handleChange }/>
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
                            <Form.Check type='checkbox' inline={true} label={t('register.explanation')}/>
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
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
import { useState } from 'react';

function Register(props){

    const [t, i18n] = useTranslation('common');
    const [formState, setFormState] = useState({
        email: '',
        username: '',
        password: '',
        birthday: ''
    })
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

    const onChangeEmail = (e) => {
        setFormState({
            ...formState,
            email: e.target.value
        })
        console.log(formState.email)
    }
    const onChangeUserName = (e) => {
        setFormState({
            ...formState,
            username: e.target.value
        })
    }
    const onChangePassword = (e) => {
        setFormState({
            ...formState,
            password: e.target.value
        })
    }
    const onChangeBirthday = (e) => {
        setFormState({
            ...formState,
            birthday: e.target.value
        })
    }

    return (
        <Row className='register flex-grow-1 justify-content-center align-items-center'>
            <Col className='p-4' sm={8} md={4}>
                <h1>{t('register.title')}</h1>
                <Form>
                    <FormInput type='email' label={t('register.email')} onChange={ onChangeEmail }/>
                    <FormInput type='text' label={t('register.username')} onChange={ onChangeUserName }/>
                    <FormInput type='password' label={t('register.password')} onChange={ onChangePassword }/>
                    <Form.Group>
                        <Form.Label>
                            {t('register.birthday')}
                        </Form.Label>
                        <Row>
                            <Col>
                                <Select data={days} onChange={ onChangeBirthday }/>
                            </Col>
                            <Col>
                                <Select data={months} onChange={ onChangeEmail }/>
                            </Col>
                            <Col>
                                <Select data={years} onChange={ onChangeEmail }/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Row>
                    </Form.Row>
                    <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' inline={true} label={t('register.explanation')}/>
                    </Form.Group>
                    <Button variant='primary' type='button' block>
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
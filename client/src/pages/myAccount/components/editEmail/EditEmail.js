import React from 'react';
// Components
import { Button, Form } from 'react-bootstrap';
import FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import useForm from '../../../../hooks/useForm';
// Utilities
import { setEmail } from '../../../../store/slices/userSlice';
import { obscureString } from '../../../../scripts/utils';
import { CHANGE_EMAIL } from '../../../../graphql/user/userMutations';
import { USER_QUERY } from '../../../../graphql/user/userQuery';

function EditEmail(){

    const [ t ] = useTranslation('common');
    const dispatch = useDispatch();
    const linkButtonRef = useRef();
    const user = useSelector( state => state.user );
    const [ show, setShow ] = useState(false);
    const [stringKey, setStringKey] = useState('settings.main.myAccount.show');
    const [ obscuredEmail, setObscuredEmail ] = useState('');
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    const [ changeEmail ] = useMutation(CHANGE_EMAIL, {
        onCompleted: () => {
            setShow(false);

        }, 
        onError: (error) => {
            if(error){ 
                setErrors({
                    username: error.message,
                    password: error.message
                });
            }
            return;
        },
        refetchQueries: [ { query: USER_QUERY }]            
    });

    useEffect(() => {
        if(user.email && obscuredEmail === '') {
            setObscuredEmail( obscureString( user.email ) );
        }
    });

    const handleShow = () => {
        show
            ? setShow(false)
            : setShow(true);
    };
    
    const toggleEmailVisibility = (e) => {

        const value = e.target.innerText;
        if(value === 'Show'){
            setStringKey('settings.main.myAccount.hide');
            setObscuredEmail( user.email );
            return;
        }

        setStringKey('settings.main.myAccount.show');
        setObscuredEmail( obscureString(user.email) );   
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const isValid = validateErrors(e.target);
        const { email, password } = form;
        
        if(isValid){
            changeEmail({
                variables: {
                    newEmail: email.value,
                    password: password.value
                }
            });
            
            dispatch( setEmail( email.value ));

            linkButtonRef.current.innerText === 'show'
                ? setObscuredEmail(email.value)
                : setObscuredEmail( obscureString(user.email) );   
        }
    };

    return(
        <>
            <div>
                <h6>{ t('settings.main.myAccount.email') }</h6>
                <span>{ obscuredEmail }</span>
                <Button variant='link' ref={ linkButtonRef } onClick={toggleEmailVisibility}> { t(stringKey) } </Button>
            </div>
            <Button onClick={ handleShow }className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            <FormModal show={ show } handleOnHide={handleShow}  modalTitle={ t('settings.main.myAccount.changeEmail') }>
                <p className='text-center'>
                    {t('settings.main.myAccount.editEmailDescription')}
                </p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>         
                        <FormFeedback error={ errors.email }>   
                            <Form.Label>{t('settings.main.myAccount.email')}</Form.Label>
                            <Form.Control name='email' isInvalid={ !!errors.email } type='email' className='py-3'></Form.Control>
                        </FormFeedback>
                    </Form.Group>
                    <Form.Group>
                        <FormFeedback error={ errors.password } >
                            <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                            <Form.Control name='password' isInvalid={ !!errors.password } type='password'></Form.Control>
                        </FormFeedback>
                    </Form.Group>
                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant='link' onClick={handleShow}>{ t('settings.main.myAccount.cancel') }</Button>
                        <Button variant='primary' type='submit'>{ t('settings.main.myAccount.ready') }</Button>
                    </Form.Group>
                </Form>
            </FormModal>
        </>
    );
}

export default EditEmail;
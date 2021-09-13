import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';
// Hooks 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import useForm from '../../../../hooks/useForm';

// Utilite
import { CHANGE_USERNAME } from '../../../../graphql/mutations';
function EditUserName(props){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);
    const { 
        errors,  
        setErrors,
        validateErrors
    } = useForm();

    const [ changeUsername ] = useMutation(CHANGE_USERNAME, {
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
        }            
    });

    const handleShow = () => {
        show
            ? setShow(false)
            : setShow(true);
    };
    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const isValid = validateErrors(e.target);
        const { username, password } = form;
        if(isValid){
            changeUsername({
                variables: {
                    newUsername: username.value,
                    password: password.value
                }
            });
        }

    };
    
    return(
        <>
            <div>
                <h6>{ t('settings.main.myAccount.username') }</h6>
                <span>{props.username}</span>
            </div>
            <Button className='ml-auto' variant='secondary' onClick={handleShow}>{t('settings.main.myAccount.edit')}</Button>
            <Modal centered show={ show } onHide={handleShow} >
                <Modal.Header className='pb-0' closeButton>
                    <Modal.Title className='ml-auto'>
                        {t('settings.main.myAccount.changeUsername')}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <p className='text-center'>
                        {t('settings.main.myAccount.editUserDescription')}
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>{t('settings.main.myAccount.username')}</Form.Label>
                        <InputGroup size='md'>
                            <Form.Control name='username' className='py-3'></Form.Control>
                            <InputGroup.Text className='py-1'>
                                {`#${props.id}`}
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Group>
                            <FormFeedback error={ errors.password }>
                                <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                                <Form.Control isInvalid={ !!errors.password } name='password' type='password'></Form.Control>
                            </FormFeedback>
                        </Form.Group>
                        <Form.Group className='ml-auto'>
                            <Button  variant='link' onClick={handleShow}>{ t('settings.main.myAccount.cancel') }</Button>
                            <Button variant='primary' type='submit'>{ t('settings.main.myAccount.ready') }</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

EditUserName.defaultProps = {
    show: false
};

EditUserName.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool
};
export default EditUserName;
import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
// Hooks 
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// Utilites
import { obscureString } from '../../../../services/utils';

function EditEmail(props){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);
    const [stringKey, setStringKey] = useState('settings.main.myAccount.show');
    const [ email, setEmail ] = useState('');
    const userEmail = props.email;

    useEffect(() => {
        if(props.email && email === '') {
            setEmail( obscureString( props.email ) );
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
            setEmail(userEmail);
            return;
        }

        setStringKey('settings.main.myAccount.show');
        setEmail( obscureString(userEmail) );   
    };

    return(
        <>
            <div>
                <h6>{ t('settings.main.myAccount.email') }</h6>
                <span>{ email }</span>
                <Button variant='link' onClick={toggleEmailVisibility}> { t(stringKey) } </Button>
            </div>
            <Button onClick={ handleShow }className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            <Modal centered show={ show } onHide={handleShow} >
                <Modal.Header className='pb-0' closeButton>
                    <Modal.Title className='ml-auto'>
                        {t('settings.main.myAccount.changeEmail')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <p className='text-center'>
                        {t('settings.main.myAccount.editEmailDescription')}
                    </p>
                    <Form>
                        <Form.Group>                        
                            <Form.Label>{t('settings.main.myAccount.email')}</Form.Label>
                            <Form.Control className='py-3'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t('settings.main.myAccount.currentPassword')}</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='link' onClick={handleShow}>{ t('settings.main.myAccount.cancel') }</Button>
                    <Button variant='primary'>{ t('settings.main.myAccount.ready') }</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

EditEmail.defaultProps = {
    show: false
};

EditEmail.propTypes = {
    email: PropTypes.email,
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool
};
export default EditEmail;
import React from 'react';
import './PasswordAuthentication.css';

// Components
import { Button, Col } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function PasswordAuthentication(){
    const [ t ] = useTranslation('common');

    return(
        <Col className='password-authentication flex-column mt-5 px-0'>
            <Button className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.changePassword')}</Button>
            <h6>{t('settings.main.myAccount.twoFactorTitle')}</h6>
            <p className='mb-4' >{t('settings.main.myAccount.twoFactorDescription')}</p>
            <Button className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.activateTwoFactor')}</Button>
        </Col>
    );
}

export default PasswordAuthentication;
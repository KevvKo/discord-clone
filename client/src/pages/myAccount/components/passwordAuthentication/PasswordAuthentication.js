import React from 'react';
import './PasswordAuthentication.css';

// Components
import { Button } from 'react-bootstrap';
import EditPassword from '../editPassword/EditPassword';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function PasswordAuthentication(){
    const [ t ] = useTranslation('common');
    const [showEditPassword, setShowEditPassword ] = useState(false);
    
    const handleShowEditPassword = () => {
        showEditPassword
            ? setShowEditPassword(false)
            : setShowEditPassword(true);
    };
    return(
        <div className='password-authentication flex-column mt-5 px-0'>
            <Button onClick={ handleShowEditPassword } className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.changePassword')}</Button>
            <EditPassword show={ showEditPassword } onHide={ handleShowEditPassword } />
            <h6>{t('settings.main.myAccount.twoFactorTitle')}</h6>
            <p className='mb-4' >{t('settings.main.myAccount.twoFactorDescription')}</p>
            <Button className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.activateTwoFactor')}</Button>
        </div>
    );
}

export default PasswordAuthentication;
import React from 'react';
import './PasswordAuthentication.css';

// Components
import { Button } from 'react-bootstrap';
import EditPassword from '../editPassword/EditPassword';
import TwoFactorAuthentication from '../twoFactorAuthentication/TwoFactorAuthentication';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function PasswordAuthentication(){
    const [ t ] = useTranslation('common');
    const [showEditPassword, setShowEditPassword ] = useState(false);
    const [showTwoFactor, setShowTwoFactor ] = useState(false);

    const handleShowEditPassword = () => {
        showEditPassword
            ? setShowEditPassword(false)
            : setShowEditPassword(true);
    };
    const handleShowTwoFactor = () => {
        showTwoFactor
            ? setShowTwoFactor(false)
            : setShowTwoFactor(true);
    };

    return(
        <div className='password-authentication flex-column mt-5 px-0' data-testid='password-authentication'>
            <Button onClick={ handleShowEditPassword } className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.changePassword')}</Button>
            <EditPassword show={ showEditPassword } handleOnHide={ handleShowEditPassword } />
            <h6>{t('settings.main.myAccount.twoFactorTitle')}</h6>
            <p className='mb-4' >{t('settings.main.myAccount.twoFactorDescription')}</p>
            <Button onClick={ handleShowTwoFactor } className='mb-4' variant='primary' size={'sm'} >{t('settings.main.myAccount.activateTwoFactor')}</Button>
            < TwoFactorAuthentication show={ showTwoFactor } onHide={ handleShowTwoFactor } />
        </div>
    );
}

export default PasswordAuthentication;
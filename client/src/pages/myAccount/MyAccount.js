import React from 'react';
import './MyAccount.css';

// Components
import UserPanel from './components/userPanel/UserPanel';
import PasswordAuthentication from './components/passwordAuthentication/PasswordAuthentication';
import DeleteAccount from './components/deleteAccount/DeleteAccount';
// Hooks
import { useTranslation } from 'react-i18next';

function MyAccount(){

    const [ t ] = useTranslation('common');

    return(
        <div className='my-account flex-column mt-5 px-4 overflow-y-auto'>
            <h3>{t('settings.main.myAccount.myAccount')}</h3>
            <UserPanel />
            <div className='breakline mb-4'></div>
            <h3>{t('settings.main.myAccount.password')}</h3>
            < PasswordAuthentication />
            <div className='breakline my-4'></div>
            <DeleteAccount />
        </div>
    );
}

export default MyAccount;
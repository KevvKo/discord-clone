import React from 'react';
import './MyAccount.css';

// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
import UserPanel from './components/userPanel/UserPanel';
import PasswordAuthentication from './components/passwordAuthentication/PasswordAuthentication';
import DeleteAndDeactivate from './components/deleteAndDeactivate/DeleteAndDeactivate';
// Hooks
import { useTranslation } from 'react-i18next';

function MyAccount(){

    const [ t ] = useTranslation('common');

    return(
        <SettingsPanel>
            <h3>{t('settings.main.myAccount.myAccount')}</h3>
            <UserPanel />
            <div className='breakline mb-4'></div>
            <h3>{t('settings.main.myAccount.passwordAndAuthentication')}</h3>
            < PasswordAuthentication />
            <div className='breakline my-4'></div>
            <DeleteAndDeactivate />  
        </SettingsPanel>
    );
}

export default MyAccount;
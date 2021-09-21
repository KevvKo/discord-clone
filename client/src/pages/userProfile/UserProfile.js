import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
import Avatar from './components/avatar/Avatar';
import ProfileColor from './components/profileColor/ProfileColor';
import UserDescription from './components/userDescription/UserDescription';
// Hooks
import { useTranslation } from 'react-i18next';

function UserProfile(){

    const [ t ] = useTranslation('common');
    return(
        <SettingsPanel>
            <h3>{t('settings.main.userProfile.title')}</h3>
            <Avatar />
            <ProfileColor />
            <UserDescription />
        </SettingsPanel>
    );
}

export default UserProfile;
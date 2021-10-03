import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
import Avatar from './components/avatar/Avatar';
import ProfileColor from './components/profileColor/ProfileColor';
import UserDescription from './components/userDescription/UserDescription';
import ChangesPopover from '../../components/ChangesPopover/ChangesPopover';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
// GQL
import { SET_DESCRIPTION } from '../../graphql/userProfile/userProfileMutations';
import { USER_PROFILE_QUERY } from '../../graphql/userProfile/userProfileQuery';

function UserProfile(){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);

    const [ setDescription ] = useMutation(SET_DESCRIPTION, {
        onError: (error) => {
            alert(error);
        },
        refetchQueries: [{ query: USER_PROFILE_QUERY }]
    });
    
    return(
        <SettingsPanel>
            <h3>{t('settings.main.userProfile.title')}</h3>
            <Avatar />
            <ProfileColor />
            <UserDescription />
            <ChangesPopover show={ show } />
        </SettingsPanel>
    );
}

export default UserProfile;
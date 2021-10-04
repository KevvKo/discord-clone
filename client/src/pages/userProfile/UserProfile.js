import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
import Avatar from './components/avatar/Avatar';
import ProfileColor from './components/profileColor/ProfileColor';
import UserDescription from './components/userDescription/UserDescription';
import ChangesPopover from '../../components/ChangesPopover/ChangesPopover';
// Hooks
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
// GQL
import { SET_DESCRIPTION } from '../../graphql/userProfile/userProfileMutations';
import { SET_COLOR } from '../../graphql/userProfile/userProfileMutations';
import { USER_PROFILE_QUERY } from '../../graphql/userProfile/userProfileQuery';

function UserProfile(){

    const [ t ] = useTranslation('common');
    const [ profileChanged, setProfileChanged] = useState(false);

    const [ setDescription ] = useMutation(SET_DESCRIPTION, {
        onError: (error) => {
            alert(error);
        },
        refetchQueries: [{ query: USER_PROFILE_QUERY }]
    });

    const [ setColor ] = useMutation(SET_COLOR, {
        onError: (error) => {
            alert(error);
        },
        refetchQueries: [{ query: USER_PROFILE_QUERY }]
    });
    const handleChange = () => {
        if( !profileChanged ){
            setProfileChanged(true);
        }
    };
    
    useEffect(() => {   
        if(profileChanged){ 
            setProfileChanged(true); 
        }
    }, [profileChanged]);


    return(
        <SettingsPanel>
            <h3>{t('settings.main.userProfile.title')}</h3>
            <Avatar onChange={ handleChange } />
            <ProfileColor onChange={ handleChange } />
            <UserDescription onChange={ handleChange } />
            <ChangesPopover show={ profileChanged } />
        </SettingsPanel>
    );
}

export default UserProfile;
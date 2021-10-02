import React from 'react';
import './UserDescription.css';
// Components
import { Form, Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
// GQL
import { SET_DESCRIPTION } from '../../../../graphql/userProfile/userProfileMutations';
import { USER_PROFILE_QUERY } from '../../../../graphql/userProfile/userProfileQuery';

function UserDescription(){

    const [ t ] = useTranslation('common');
    const [ setDescription ] = useMutation(SET_DESCRIPTION, {
        onError: (error) => {
            alert(error);
        },
        refetchQueries: [{ query: USER_PROFILE_QUERY }]
    });
    const handleClick = (e) => {
        setDescription({
            variables: {
                description: e.target.value
            }
        });
    };
    return(
        <div className='user-description'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.userDescription')}
            </div>
            <p>{t('settings.main.userProfile.textAreaDescription')}</p>
            <Form.Control 
                as='textarea' 
                placeholder={t('settings.main.userProfile.textAreaPlaceholder')}
                maxLength='190'
            ></Form.Control>
            <Button onClick={ handleClick } size='sm' variant='success'> { t('settings.main.userProfile.saveChanges') }</Button>
        </div>
    );
}

export default UserDescription;
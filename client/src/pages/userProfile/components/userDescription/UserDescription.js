import React from 'react';
import './UserDescription.css';
// Components
import { Form } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function UserDescription(){

    const [ t ] = useTranslation('common');

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
        </div>
    );
}

export default UserDescription;
import React from 'react';
import './UserDescription.css';
import PropTypes from 'prop-types';
// Components
import { Form, Button } from 'react-bootstrap';
// Hooks 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function UserDescription(){

    const [ t ] = useTranslation('common');

    const handleClick = (e) => {

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
UserDescription .prototype = {
    onChange: PropTypes.func
};

export default UserDescription;
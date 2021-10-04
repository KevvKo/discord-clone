import React from 'react';
import './UserDescription.css';
import PropTypes from 'prop-types';
// Components
import { Form } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function UserDescription(props){

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
                onChange={ props.onChange }
            ></Form.Control>
        </div>
    );
}
UserDescription.propTypes = {
    onChange: PropTypes.func
};

export default UserDescription;
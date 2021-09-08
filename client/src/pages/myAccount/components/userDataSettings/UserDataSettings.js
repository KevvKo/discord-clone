import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';


function UserDataSettings(props){

    const [ t ] = useTranslation('common');
    
    return(
        <div className='user-data-settings px-3 pb-3'>
            <div className='d-flex mb-4'>
                <div>
                    <h6>{ t('settings.main.myAccount.username') }</h6>
                    <span>{props.username}</span>
                </div>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            </div>
            <div className='d-flex mb-4'>
                <div>
                    <h6>{ t('settings.main.myAccount.email') }</h6>
                    <span>{props.email}</span>
                </div>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            </div>
            <div className='d-flex mb-4'>
                <div>
                    <h6>{ t('settings.main.myAccount.phoneNumber') }</h6>
                    <span>{props.username}</span>
                </div>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.add')}</Button>
            </div>
        </div>
    );
}

UserDataSettings.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string
};

export default UserDataSettings;
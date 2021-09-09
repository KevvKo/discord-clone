import React from 'react';
import './UserDataSettings.css';
// Components
import { Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
// Utils
import PropTypes from 'prop-types';
import { obscureString } from '../../../../services/utils';
function UserDataSettings(props){

    const userEmail = props.email;
    const [ t ] = useTranslation('common');
    const [ email, setEmail ] = useState('');
    const [stringKey, setStringKey] = useState('settings.main.myAccount.show');

    useEffect(() => {
        if(props.email && email === '') {
            setEmail( obscureString( props.email ) );
        }
    });

    const toggleEmailVisibility = (e) => {

        const value = e.target.innerText;

        if(value === 'Show'){
            setStringKey('settings.main.myAccount.hide');
            setEmail(userEmail);
            return;
        }

        setStringKey('settings.main.myAccount.show');
        setEmail( obscureString(userEmail) );   
    };

    return(
        <div className='user-data-settings mx-3 mb-3 p-3'>
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
                    <span>{email}</span>
                    <Button variant='link' onClick={toggleEmailVisibility}> { t(stringKey) } </Button>
                </div>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            </div>
            <div className='d-flex mb-4'>
                <div>
                    <h6>{ t('settings.main.myAccount.phoneNumber') }</h6>
                    <span>{t('settings.main.myAccount.noPhoneNumber')}</span>
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
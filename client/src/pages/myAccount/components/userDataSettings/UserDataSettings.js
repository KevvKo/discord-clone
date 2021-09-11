import React from 'react';
import './UserDataSettings.css';
// Components
import { Button } from 'react-bootstrap';
import EditUserName from '../editUserName/EditUserName';
import EditEmail from '../editEmail/EditEmail';
// Hooks 
import { useTranslation } from 'react-i18next';
// Utils
import PropTypes from 'prop-types';
function UserDataSettings(props){

    const [ t ] = useTranslation('common');
     

    return(
        <div className='user-data-settings mx-3 mb-3 p-3'>
            <div className='d-flex mb-4'>
                <EditUserName id={ props.id } username={ props.username }/>
            </div>
            <div className='d-flex mb-4'>
                <EditEmail email={props.email}/>
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
    id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
};

export default UserDataSettings;
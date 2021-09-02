import React from 'react';
import './SettingsNavbar.css';

// Components

import Col from 'react-bootstrap/Col';
import ListTab from '../../../../components/tabs/listTab/ListTab';
import { Link } from 'react-router-dom';

// Hooks
import { useTranslation } from 'react-i18next';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// mutations
import { SET_USER_STATUS_MUTATION } from '../../../../graphql/mutations';

function SettingsNavbar(){
    
    const [ t ] = useTranslation('common');
    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const history = useHistory();
    let { url } = useRouteMatch();

    const [ setUserStatus ] = useMutation(SET_USER_STATUS_MUTATION, {
        variables: {
            status: false
        },
        onCompleted: () => {
            localStorage.removeItem( AUTH_TOKEN );
            history.replace({
                pathname: '/login'
            });
        },
        onError: ( error ) => {
            console.log( error );
        }
    });

    const logout = () => {
        setUserStatus();
    };

    return(
        <Col className='settings-navbar' md={ 3 }>
            <div className='mt-5'>
                <div className='pb-3 settings-navbar-separator'>
                    <h6 className='ml-1'>
                        {t('settings.navbar.userSettingsTitle')}
                    </h6>
                    <Link to={`${url}/my-account`}>
                        <ListTab>
                            {t('settings.navbar.myAccount')}
                        </ListTab>
                    </Link>
                    <Link to={`${url}/user-profile`}>
                        <ListTab>
                            {t('settings.navbar.userProfile')}
                        </ListTab>
                    </Link>
                    <Link to={`${url}/privacy-and-security`}>
                        <ListTab>
                            {t('settings.navbar.privacyAndSecurity')}
                        </ListTab>
                    </Link>
                    <Link to={`${url}/authorized-apps`}>
                        <ListTab>
                            {t('settings.navbar.authorizedApps')}
                        </ListTab>
                    </Link>
                    <Link to={`${url}/connections`}>
                        <ListTab>
                            {t('settings.navbar.connections')}
                        </ListTab>
                    </Link>
                </div>
                <div className='mt-3 pb-3 settings-navbar-separator'>
                    <h6 className='ml-1'>
                        {t('settings.navbar.activitySettings')}
                    </h6>
                    <Link to={`${url}/activity-status`}>
                        <ListTab>
                            {t('settings.navbar.activityStatus')}
                        </ListTab>
                    </Link>
                    <Link to={`${url}/game-overlay`}>
                        <ListTab>
                            {t('settings.navbar.gameOverlay')}
                        </ListTab>
                    </Link>
                </div>
                <div className='mt-2 pb-2 settings-navbar-separator'>
                    <ListTab onClick={logout} callback={logout}>
                        {t('settings.navbar.logout')}
                    </ListTab>
                </div>
            </div>
        </Col>
    );
}

export default SettingsNavbar;
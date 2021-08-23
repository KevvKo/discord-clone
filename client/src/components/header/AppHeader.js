import React from 'react';
import './AppHeader.css';

// Components
import IconButton from '../buttons/iconButton/IconButton';

// Hooks
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// mutations
import { SET_USER_STATUS_MUTATION } from '../../graphql/mutations';

function AppHeader() {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const history = useHistory();
    const [ t ] = useTranslation('common');

    const [ setUserStatus ] = useMutation(SET_USER_STATUS_MUTATION, {
        variables: {
            status: false
        },
        onCompleted: () => {
            localStorage.removeItem( AUTH_TOKEN );
            history.replace({
                path: '/login'
            });
        },
        onError: ( error ) => {
            console.log( error );
        }
    });

    const logout = () => {
        setUserStatus();
    };

    return (
        <header className="app-header d-flex align-items-center">
            Discord Clone
            <IconButton 
                icon='bi-box-arrow-left' 
                size='lg' 
                callback={logout}
                cssClasses='p-0 mr-3 ml-auto' 
                tooltipText={t( 'header.logout' )}
                tooltipPlacement='bottom' />
        </header>
    );
}

export default AppHeader;

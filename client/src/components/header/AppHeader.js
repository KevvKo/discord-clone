import React from 'react';
import './AppHeader.css';

// Components
import IconButton from '../buttons/iconButton/IconButton';

// Hooks
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

function AppHeader() {

    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const history = useHistory();
    const [ t ] = useTranslation('common');

    const logout = () => {

        localStorage.removeItem( AUTH_TOKEN );
        history.replace({
            path: '/login'
        });
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

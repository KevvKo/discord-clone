import React from 'react';
import './Index.css';

// Components
import { Row } from 'react-bootstrap';

// Hooks
import { useHistory, useLocation } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function Index(){

    let history = useHistory();
    let location = useLocation();
    const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    const authenticationToken = localStorage.getItem(AUTH_TOKEN);
    
    authenticationToken
        ? history.push('/home')
        : history.replace(
            {pathname:'/login', 
                state: {from: location}}
        );

    const [t] = useTranslation('common');

    return (
        <Row className='index flex-grow-1' role='page-view'>
            <div className='col d-flex flex-column justify-content-center align-items-center'>
                <h5>
                    {t('index.title')}
                </h5>
                <i className='bi bi-emoji-expressionless-fill'></i>
                <p>
                    {t('index.subtitle')} 
                </p>
            </div>
        </Row>
    );
}

export default Index;
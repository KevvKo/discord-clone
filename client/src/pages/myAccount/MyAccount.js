import React from 'react';
import './MyAccount.css';

// Components
import UserPanel from './components/userPanel/UserPanel';
import { Row } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function MyAccount(){

    const [ t ] = useTranslation('common');

    return(
        <Row className='my-account flex-column mt-5 px-4'>
            <h3>{t('myAccount.title')}</h3>
            <UserPanel />
        </Row>
    );
}

export default MyAccount;
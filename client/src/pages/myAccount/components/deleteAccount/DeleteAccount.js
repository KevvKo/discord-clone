import React from 'react';
import './DeleteAccount.css';

// Components
import { Button, Col } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function DeleteAccount(){

    const [ t ] = useTranslation('common');

    return(
        <Col className='delete-account flex-column mt-4 px-0'>
            <h6>{t('settings.main.myAccount.deleteAccount')}</h6>
            <p>{t('settings.main.myAccount.deactivateAccountDescription')}</p>
            <div>
                <Button variant='danger' className='mr-3'>{t('settings.main.myAccount.deactivateAccount')}</Button>
                <Button variant='outline-danger'>{t('settings.main.myAccount.deleteAccount')}</Button>
            </div>
        </Col>
    );
}

export default DeleteAccount;
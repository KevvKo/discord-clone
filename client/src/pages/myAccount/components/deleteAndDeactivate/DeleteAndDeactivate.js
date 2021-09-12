import React from 'react';
import './DeleteAndDeactivate.css';

// Components
import { Button } from 'react-bootstrap';
import DeleteAccount from '../deleteAccount/DeleteAccount';
import DeactivateAccount from '../deactivateAccount/DeactivateAccount';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function DeleteAndDeactivate(){

    const [ t ] = useTranslation('common');
    const [ showDelete, setShowDelete ] = useState(false);
    const [ showDeactivate, setShowDeactivate ] = useState(false);
    
    const handleShowDelete = () => {
        showDelete
            ? setShowDelete(false)
            : setShowDelete(true);
    };

    const handleShowDeactivate = () => {
        showDeactivate
            ? setShowDeactivate(false)
            : setShowDeactivate(true);
    };
    
    return(
        <div className='delete-and-deactivate flex-column my-4 px-0'>
            <h6>{t('settings.main.myAccount.deleteAccount')}</h6>
            <p>{t('settings.main.myAccount.deactivateAccountDescription')}</p>
            <div>
                <Button 
                    variant='danger' 
                    className='mr-3'
                    onClick={ handleShowDeactivate}
                >
                    {t('settings.main.myAccount.deactivateAccount')}
                </Button>
                <Button 
                    variant='outline-danger'
                    onClick={ handleShowDelete}
                >
                    {t('settings.main.myAccount.deleteAccount')}
                </Button>
                <DeleteAccount show={ showDelete } callback={ handleShowDelete }  />
                <DeactivateAccount show={ showDeactivate } callback={ handleShowDeactivate } />
            </div>
        </div>
    );
}

export default DeleteAndDeactivate;
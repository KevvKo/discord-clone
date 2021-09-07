import React from 'react';

// Components
import { Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function UserDataSettings(){

    const [ t ] = useTranslation('common');

    return(
        <div className='user-data-settings px-3 pb-3'>
            <div className='d-flex mb-4'>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            </div>
            <div className='d-flex mb-4'>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.edit')}</Button>
            </div>
            <div className='d-flex mb-4'>
                <Button className='ml-auto' variant='secondary'>{t('settings.main.myAccount.add')}</Button>
            </div>
        </div>
    );
}

export default UserDataSettings;
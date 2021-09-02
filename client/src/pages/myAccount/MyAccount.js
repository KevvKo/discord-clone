import React from 'react';
import './MyAccount.css';

// Components
import UserPanel from './components/userPanel/UserPanel';

// Hooks
import { useTranslation } from 'react-i18next';

function MyAccount(){

    const [ t ] = useTranslation('common');

    return(
        <div className='my-account mt-5 px-4'>
            <h3>  {t('myAccount.title')} </h3>
            <UserPanel />
        </div>
    );
}

export default MyAccount;
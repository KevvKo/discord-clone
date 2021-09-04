import React from 'react';

// Hooks 
import { useTranslation } from 'react-i18next';

function UserDataSettings(){

    const [ t ] = useTranslation('common');

    return(
        <div className='user-data-settings'>
        </div>
    );
}

export default UserDataSettings;
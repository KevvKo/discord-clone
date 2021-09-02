import React from 'react';
import './UserPanel.css';

// Hooks
import { useTranslation } from 'react-i18next';

function UserPanel(){

    const [ t ] = useTranslation('common');

    return(
        <div className='user-panel p-5'>
        </div>
    );
}

export default UserPanel;
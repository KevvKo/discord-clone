import React from 'react';
import './UserPanel.css';

// Components
import UserDataSettings from '../userDataSettings/UserDataSettings';
// Hooks
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { USERNAME_QUERY } from '../../../../graphql/query';

function UserPanel(){

    const { data } = useQuery( USERNAME_QUERY );
    const [ t ] = useTranslation('common');
    const [username, setUsername ] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if(data){
            setUsername(data.user.username);
            setUserId(data.user.id);
        }
    });

    return(
        <div className='user-panel'>
            <div className="mb-2"></div>
            <div>
                <b>{username}</b>#{userId}
            </div>
            <UserDataSettings />
        </div>
    );
}

export default UserPanel;
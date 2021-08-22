import React from 'react';
import './UserAvatar.css';

import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USERNAME_QUERY } from '../../../graphql/query';

function UserAvatar() {

    let isOnline; 
    const { data } = useQuery( USERNAME_QUERY );

    useEffect( () =>  {
        if( data ) isOnline = data.user.status; 
    }, [ data, isOnline ]);

    return (
        <div className="user-avatar mr-2">
            <i className="bi bi-person-circle"></i>
            { isOnline &&
                <div className='active-user d-inline-block'></div>
            }
        </div>
    );
}

export default UserAvatar;

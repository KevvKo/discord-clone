import React from 'react';
import './UserAvatar.css';

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { USERNAME_QUERY } from '../../../graphql/query';

function UserAvatar() {

    let [isOnline, setIsOnline] = useState( false ); 

    const { data } = useQuery( USERNAME_QUERY );

    useEffect( () =>  {
        if(data) {
            setIsOnline(data.user.status);
        }
    }, [data, isOnline]);

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

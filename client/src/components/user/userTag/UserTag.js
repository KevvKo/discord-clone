import React from 'react';
import { useQuery } from '@apollo/client';
import { USERNAME_QUERY } from '../../../graphql/query';

function UserTag() {

    const { data } = useQuery( USERNAME_QUERY );

    return (
        <div className='user-tag flex-fill'>
            { data &&
                <>
                    <div>{ data.user.username}</div>
                    <div>#{ data.user.id }</div>
                </>
            }
        </div>
    );
}

export default UserTag;

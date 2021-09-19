import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../../../graphql/user/userQuery';

function UserTag() {

    const { data } = useQuery( USER_QUERY );

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

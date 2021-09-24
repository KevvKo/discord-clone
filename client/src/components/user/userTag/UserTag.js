import React from 'react';
// Hooks
import { useSelector } from 'react-redux';

function UserTag() {

    const user = useSelector(state => state.user);

    return (
        <div className='user-tag flex-fill'>
            { user &&
                <>
                    <div>{ user.username}</div>
                    <div>#{ user.id }</div>
                </>
            }
        </div>
    );
}

export default UserTag;

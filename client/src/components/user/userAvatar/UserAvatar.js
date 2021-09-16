import React from 'react';
import './UserAvatar.css';

import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../../../graphql/query';
import PropTypes  from 'react-bootstrap/esm/Image';

function UserAvatar(props) {

    let [isOnline, setIsOnline] = useState( false ); 

    const { data } = useQuery( USER_QUERY );

    useEffect( () =>  {
        if(data) {
            setIsOnline(data.user.status);
        }
    }, [data, isOnline]);

    return (
        <div className={`user-avatar mr-2 ${ props.cssClasses }`}>
            <i className='bi bi-person-circle' style={{fontSize: props.fontSize + 'rem'}}></i>
            { isOnline &&
                <div className='active-user d-inline-block'></div>
            }
        </div>
    );
}

UserAvatar.defaultProps = {
    cssClasses: '',
    fontSize: '1.666rem'
};

UserAvatar.propTypes = {
    cssClasses: PropTypes.string,
    fontSize: PropTypes.string
};

export default UserAvatar;

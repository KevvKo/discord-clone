import React from 'react';
import './UserAvatar.css';
// Hooks
import { useSelector } from 'react-redux';
// Utilities
import PropTypes from 'prop-types';

function UserAvatar(props) {

    const user = useSelector(state => state.user);

    return (
        <div className={`user-avatar mr-2 ${ props.cssClasses }`} data-testid='user-avatar'>
            <i className='bi bi-person-circle' style={{fontSize: props.fontSize + 'rem'}}></i>
            { user.status &&
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

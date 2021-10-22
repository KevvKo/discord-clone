import React from 'react';
import './UserAvatar.css';
// Hooks
import { useSelector } from 'react-redux';
// Utilities
import PropTypes from 'prop-types';

function UserAvatar(props) {
    let classNames = 'user-avatar mr-2';
    const user = useSelector(state => state.user);
    if( props.cssClasses ) classNames += ' ' + props.cssClasses;
    return (
        <div className={ classNames } data-testid='user-avatar'>
            <i className='bi bi-person-circle' style={{fontSize: props.fontSize + 'rem'}}></i>
            { user.status &&
                <div className='active-user d-inline-block'></div>
            }
        </div>
    );
}

UserAvatar.defaultProps = {
    cssClasses: '',
    fontSize: '1.666'
};

UserAvatar.propTypes = {
    cssClasses: PropTypes.string,
    fontSize: PropTypes.string
};

export default UserAvatar;

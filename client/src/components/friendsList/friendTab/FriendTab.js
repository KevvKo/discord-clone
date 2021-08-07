import React from 'react';
import PropTypes from 'prop-types';
import './FriendTab.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../../buttons/iconButton/IconButton';

function FriendTab(props) {

    const [t] = useTranslation('common');
    const iconClassNames = `bi bi-${props.icon} mr-2`;

    return (
        <li className='friend-tab d-flex align-items-center mt-1 mr-1 p-1'>
            <i className={iconClassNames}></i>
            <span className='flex-fill'>
                {props.text}
            </span>
            { props.closeButton &&
              <IconButton icon='bi-x' size='lg'  tooltipText={t('friendsList.removeTooltip')}/>
            }
        </li>
    );
}

FriendTab.defaultProps = {
    closeButton: false
};

FriendTab.propTypes = {
    icon: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string
};

export default FriendTab;

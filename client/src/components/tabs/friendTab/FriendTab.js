import React from 'react';
import PropTypes from 'prop-types';


// Components
import IconButton from '../../buttons/iconButton/IconButton';
import ListTab from '../listTab/ListTab';
// Hooks
import { useTranslation } from 'react-i18next';

function FriendTab(props) {

    const [t] = useTranslation('common');
    const iconClassNames = `bi bi-${props.icon} mr-2`;

    return (
        <ListTab className='friend-tab'>
            { props.icon &&
                <i className={iconClassNames} data-testid='friend-tab-icon'></i>
            }
            <span className='flex-fill'>
                {props.text}
            </span>
            { props.closeButton &&
              <IconButton icon='bi-x' size='lg'  tooltipText={t('friendsList.removeTooltip')}/>
            }
        </ListTab>            
    );
}

FriendTab.defaultProps = {
    closeButton: false
};

FriendTab.propTypes = {
    icon: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string,

};

export default FriendTab;

import React from 'react';
import PropTypes from 'prop-types';
import './ListTab.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../buttons/iconButton/IconButton';

function ListTab(props) {

    const [t] = useTranslation('common');
    const iconClassNames = `bi bi-${props.icon} mr-2`;

    return (
        <li className='list-tab d-flex align-items-center mt-1 mr-1 p-1'>
            { props.icon &&
                <i className={iconClassNames}></i>
            }
            <span className='flex-fill'>
                {props.text}
            </span>
            { props.closeButton &&
              <IconButton icon='bi-x' size='lg'  tooltipText={t('friendsList.removeTooltip')}/>
            }
        </li>
    );
}

ListTab.defaultProps = {
    closeButton: false
};

ListTab.propTypes = {
    icon: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string
};

export default ListTab;

import React from 'react';
import PropTypes from 'prop-types';
import './ChannelTab.css';

function ChannelTab(props) {

    const icon= `bi ${props.icon} align-self-center`;
    const classNames = props.defaultBehaviour 
        ? 'default-hover channel-tab d-flex justify-content-center' 
        : 'channel-tab d-flex justify-content-center';
    
    return (
        <div className={classNames} data-testid='channel-tab'>
            <i className={icon} data-testid='channel-tab-icon'></i>
        </div>
    );
}

ChannelTab.defaultProps = {
    icon: 'bi-person-fill',
    defaultBehaviour: true
};

ChannelTab.propTypes = {
    defaultBehaviour: PropTypes.bool,
    icon: PropTypes.string
};

export default ChannelTab;


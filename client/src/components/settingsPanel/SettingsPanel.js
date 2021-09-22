import React  from 'react';
import './SettingsPanel.css';
import PropTypes from 'prop-types';

function SettingsPanel(props){
    return(
        <div className='settings-panel flex-column mt-5 px-4 overflow-y-auto'>
            {props.children}
        </div>
    );
}

SettingsPanel.propTypes = {
    children: PropTypes.node
};

export default SettingsPanel;
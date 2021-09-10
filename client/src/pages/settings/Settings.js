import React from 'react';
import './Settings.css';

// Components
import SettingsNavbar from './components/settingsNavbar/SettingsNavbar';
import SettingsMain from './components/SettingsMain/SettingsMain';
import Row from 'react-bootstrap/Row';

function Settings(){

    return(
        <Row className="settings flex-fill flex-nowrap">
            <SettingsNavbar />
            <SettingsMain />
        </Row>
    );
}

export default Settings;
import React from 'react';
import './Settings.css';

// Components
import SettingsNavbar from './components/settingsNavbar/SettingsNavbar';
import SettingsMain from './components/SettingsMain/SettingsMain';
import Row from 'react-bootstrap/Row';
// Hooks
import { useSetupUser } from '../../hooks/useSetupUser';
import { useSelector } from 'react-redux';

function Settings(){
    // const user = useSelector( state => state.user);

    const { error, loading } = useSetupUser();

    if ( loading ) return 'loading...';
    if ( error ) return `${error.message}`;    

    return(
        <Row className="settings flex-fill flex-nowrap">
            <SettingsNavbar />
            <SettingsMain />
        </Row>
    );
}

export default Settings;
import React from 'react';
import './Settings.css';

// Components
import SettingsNavbar from './components/settingsNavbar/SettingsNavbar';
import SettingsMain from './components/SettingsMain/SettingsMain';
import Row from 'react-bootstrap/Row';
// Hooks
import { useSetupUser } from '../../hooks/useSetupUser';
import { useSetupUserProfile } from '../../hooks/useSetupUserProfile'; 
function Settings(){

    const { error, loading } = useSetupUser();
    useSetupUserProfile();

    if ( loading ) return 'loading...';
    if ( error ) return `${error.message}`;    

    return(
        <Row className="settings flex-fill flex-nowrap" data-testid='settings'>
            <SettingsNavbar />
            <SettingsMain />
        </Row>
    );
}

export default Settings;
import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
// Hooks
import { useTranslation } from 'react-i18next';

function PrivacyAndSecurity(){

    const [ t ] = useTranslation('common');

    return(
        <SettingsPanel>
            <h3>{t('settings.main.privacyAndSecurity.title')}</h3>
        </SettingsPanel>
    );
}

export default PrivacyAndSecurity;
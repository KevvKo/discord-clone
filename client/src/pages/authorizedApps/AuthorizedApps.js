import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
// Hooks
import { useTranslation } from 'react-i18next';

function AuthorizedApps(){

    const [ t ] = useTranslation('common');
    return(
        <SettingsPanel>
            <h3>{t('settings.main.authorizedApps.title')}</h3>
        </SettingsPanel>
    );
}

export default AuthorizedApps;
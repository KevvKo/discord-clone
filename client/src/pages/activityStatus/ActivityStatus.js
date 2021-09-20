import React from 'react';
// Components
import SettingsPanel from '../../components/settingsPanel/SettingsPanel';
// Hooks
import { useTranslation } from 'react-i18next';

function ActivityStatus(){

    const [ t ] = useTranslation('common');

    return(
        <SettingsPanel>
            <h3>{t('settings.main.activityStatus.title')}</h3>
        </SettingsPanel>
    );
}

export default ActivityStatus;
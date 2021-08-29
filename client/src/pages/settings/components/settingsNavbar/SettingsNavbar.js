import React from 'react';
import './SettingsNavbar.css';

// Components

import Col from 'react-bootstrap/Col';
import ListTab from '../../../../components/tabs/listTab/ListTab';

// Hooks
import { useTranslation } from 'react-i18next';

function SettingsNavbar(){
    
    const [ t ] = useTranslation('common');
    return(
        <Col className='settings-navbar' md={ 3 }>
            <div className='mt-5'>
                <h6 className='ml-1'>
                    {t('settings.navbar.userSettingsTitle')}
                </h6>
                <ListTab>
                    {t('settings.navbar.myAccount')}
                </ListTab>
                <ListTab>
                    {t('settings.navbar.userProfile')}
                </ListTab>
                <ListTab>
                    {t('settings.navbar.privacyAndSecurity')}
                </ListTab>
                <ListTab>
                    {t('settings.navbar.authorizedApps')}
                </ListTab>
                <ListTab>
                    {t('settings.navbar.connections')}
                </ListTab>
            </div>
        </Col>
    );
}

export default SettingsNavbar;
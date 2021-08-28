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
            <div>
                <ListTab>
                    {t('settings.navbar.myAccount')}
                </ListTab>
            </div>
        </Col>
    );
}

export default SettingsNavbar;
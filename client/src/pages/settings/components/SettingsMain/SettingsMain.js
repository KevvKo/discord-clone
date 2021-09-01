import React from 'react';
import './SettingsMain.css';

// Components
import { Col, Row } from 'react-bootstrap';
import { Switch, useHistory } from 'react-router-dom';
import IconButton from '../../../../components/buttons/iconButton/IconButton';

// Hooks
import { useTranslation } from 'react-i18next';

function SettingsMain(){
    
    const [ t ] = useTranslation('common');
    const history = useHistory();

    const routingToHome = () => {
        history.replace({
            pathname: '/home'
        });
    };

    return (
        <Col className='settings-main' md={ 9 }>
            <Row>
                <Col md={ 9 } >
                    <Switch>

                    </Switch>
                </Col>
                <Col md={ 3 }>
                    <div id="back-route">
                        <IconButton 
                            icon='bi-x'
                            size='sm'
                            cssClasses='mt-5 closeButton'
                            tooltipText= {t('settings.main.close')}
                            callback={ routingToHome }
                        />
                        <p>ESC</p>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default SettingsMain;
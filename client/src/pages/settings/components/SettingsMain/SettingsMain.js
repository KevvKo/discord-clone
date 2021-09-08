import React from 'react';
import './SettingsMain.css';

// Components
import { Col, Row } from 'react-bootstrap';
import { Route, Switch, useHistory } from 'react-router-dom';
import IconButton from '../../../../components/buttons/iconButton/IconButton';
import AuthorizedApps from '../../../authorizedApps/AuthorizedApps';
import ActivityStatus from '../../../activityStatus/ActivityStatus';
import Connections from '../../../connections/Connections';
import GameOverlay from '../../../gameOverlay/GameOverlay';
import MyAccount from '../../../myAccount/MyAccount';
import PrivacyAndSecurity from '../../../privacyAndSecurity/PrivacyAndSecurity';
import UserProfile from '../../../userProfile/UserProfile';

// Hooks
import { useTranslation } from 'react-i18next';
import { useRouteMatch } from 'react-router-dom';

function SettingsMain(){
    
    const [ t ] = useTranslation('common');
    const history = useHistory();
    const { path } = useRouteMatch();

    const routingToHome = () => {
        history.replace({
            pathname: '/home'
        });
    };

    return (
        <Col className='settings-main' md={ 9 }>
            <Row>
                <Col xl={ 9 } xxl={ 6 } >
                    <Switch>
                        <Route path={`${path}/authorized-apps`}>
                            <AuthorizedApps />
                        </Route>
                        <Route path={`${path}/activity-status`}>
                            <ActivityStatus />
                        </Route>
                        <Route path={`${path}/connections`}>
                            <Connections />
                        </Route>
                        <Route path={`${path}/game-overlay`}>
                            <GameOverlay />
                        </Route>
                        <Route exact path={`${path}/my-account`}>
                            <MyAccount />
                        </Route>
                        <Route path={`${path}/privacy-and-security`}>
                            <PrivacyAndSecurity />
                        </Route>
                        <Route path={`${path}/user-profile`}>
                            <UserProfile />
                        </Route>
                    </Switch>
                </Col>
                <Col xl={ 3 } xxl={ 6 }>
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
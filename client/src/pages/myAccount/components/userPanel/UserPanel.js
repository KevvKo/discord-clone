import React from 'react';
import './UserPanel.css';

// Components
import UserAvatar from '../../../../components/user/userAvatar/UserAvatar';
import UserDataSettings from '../userDataSettings/UserDataSettings';
import { Col, Button } from 'react-bootstrap';

// Hooks
import { useTranslation } from 'react-i18next';
import { useRouteMatch, useHistory } from 'react-router';
import { useSelector } from 'react-redux';

function UserPanel(){

    const history = useHistory();
    const { path } = useRouteMatch();
    const user = useSelector( state => state.user);
    const [ t ] = useTranslation('common');

    const routing = () => {
        history.replace({
            pathname: `${path}/user-profile`
        });
    };

    return(
        <Col className='user-panel px-0 pb-2 mt-3 mb-4' data-testid='user-panel'>
            <div id="user-panel-header" className="d-flex">
                <div id='user-panel-header-left'></div>
                <div id='user-panel-header-right'></div>
            </div>
            <div className='d-flex p-3'>
                <UserAvatar fontSize='4' cssClasses='user-avatar-positioning ml-2 d-inline-block' />
                <span>
                    <b>{user.name}</b>#{user.id}
                </span>
                <Button className='ml-auto align-self-start' onClick={routing} size={'sm'}>{t('settings.main.myAccount.editProfile')}</Button>
            </div>
            <UserDataSettings />
        </Col>
    );
}

export default UserPanel;
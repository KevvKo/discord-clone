import React from 'react';
import './UserPanel.css';

// Components
import UserAvatar from '../../../../components/user/userAvatar/UserAvatar';
import UserDataSettings from '../userDataSettings/UserDataSettings';
import { Col, Button } from 'react-bootstrap';

// Hooks
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteMatch, useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../../../../graphql/user/userQuery';

function UserPanel(){

    const history = useHistory();
    const { path } = useRouteMatch();
    const { data } = useQuery( USER_QUERY );
    const [ t ] = useTranslation('common');
    const [username, setUsername ] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail ] = useState('');


    useEffect(() => {
        if(data){
            setUsername(data.user.username);
            setUserId(data.user.id);
            setEmail(data.user.email);
        }
    });

    const routing = () => {
        history.replace({
            pathname: `${path}/user-profile`
        });
    };

    return(
        <Col className='user-panel px-0 pb-2 mt-3 mb-4'>
            <div id="user-panel-header" className="d-flex">
                <div id='user-panel-header-left'></div>
                <div id='user-panel-header-right'></div>
            </div>
            <div className='d-flex p-3'>
                <UserAvatar fontSize='4' cssClasses='user-avatar-positioning ml-2 d-inline-block' />
                <span>
                    <b>{username}</b>#{userId}
                </span>
                <Button className='ml-auto align-self-start' onClick={routing} size={'sm'}>{t('settings.main.myAccount.editProfile')}</Button>
            </div>
            <UserDataSettings id={ userId } username={ username } email={ email } />
        </Col>
    );
}

export default UserPanel;
import React from 'react';
import './UserPanel.css';

// Components
import UserAvatar from '../../../../components/user/userAvatar/UserAvatar';
import UserDataSettings from '../userDataSettings/UserDataSettings';
import { Button } from 'react-bootstrap';

// Hooks
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteMatch, useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { USERNAME_QUERY } from '../../../../graphql/query';

function UserPanel(){

    const history = useHistory();
    const { path, url } = useRouteMatch();
    const { data } = useQuery( USERNAME_QUERY );
    const [ t ] = useTranslation('common');
    const [username, setUsername ] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if(data){
            setUsername(data.user.username);
            setUserId(data.user.id);
        }
    });

    const routing = () => {
        history.replace({
            pathname: `${path}/user-profile`
        });
    };

    return(
        <div className='user-panel'>
            <div id='user-panel-header'></div>
            <div className='d-flex p-3'>
                <UserAvatar fontSize='4' cssClasses='user-avatar-positioning d-inline-block' />
                <b>{username}</b>#{userId}
                <Button className='ml-auto' onClick={routing} size={'sm'}>{t('settings.main.myAccount.editProfile')}</Button>
            </div>
            <UserDataSettings />
        </div>
    );
}

export default UserPanel;
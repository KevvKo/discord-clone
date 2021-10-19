import React from 'react';
import './UserBar.css';
import {useTranslation} from 'react-i18next';
import IconButton from '../../buttons/iconButton/IconButton';
import UserAvatar from '../userAvatar/UserAvatar';
import UserTag from '../userTag/UserTag';
import {
    Link
} from 'react-router-dom';
function UserBar() {

    const [t] = useTranslation('common');
    const classes = 'p-1 m-1';
    return (
        <div className='px-2 user-bar d-flex align-items-center' data-testid='user-bar'>
            <UserAvatar />
            <UserTag />
            <div className='d-flex'>
                <IconButton 
                    icon='bi-mic-fill' 
                    hover={true}
                    cssClasses={classes} 
                    background={false}  
                    tooltipText={t('userBar.micTooltip')}/>
                <IconButton 
                    icon='bi-headphones'
                    hover={true}
                    cssClasses={classes} 
                    background={false}  
                    tooltipText={t('userBar.audioTooltip')}/>
                <Link to='/settings/my-account'>
                    <IconButton 
                        icon='bi-gear-fill'
                        hover={true} 
                        cssClasses={classes} 
                        background={false}  
                        tooltipText={t('userBar.settingsTooltip')}/>
                </Link>
            </div>
        </div>
    );
}

export default UserBar;

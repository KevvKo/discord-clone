import './UserBar.css';
import {useTranslation} from "react-i18next";
import IconButton from '../../common/iconButton/IconButton';
import UserAvatar from '../userAvatar/UserAvatar';
import UserTag from '../userTag/UserTag';
function UserBar() {

    const [t, i18n] = useTranslation('common');
    const classes = 'p-0 mx-2'
    return (
    <div className='p-2 user-bar d-flex align-items-center'>
        <UserAvatar />
        <UserTag />
        <div className="d-flex">
            <IconButton 
                icon="bi-mic-fill" 
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.micTooltip')}/>
            <IconButton 
                icon="bi-headphones"
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.audioTooltip')}/>
            <IconButton 
                icon="bi-gear-fill" 
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.settingsTooltip')}/>
        </div>
    </div>
    );
}

export default UserBar;

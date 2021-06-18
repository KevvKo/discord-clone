import './UserBar.css';
import {useTranslation} from "react-i18next";
import IconButton from '../../common/iconButton/IconButton';
import UserAvatar from '../userAvatar/UserAvatar';
import UserTag from '../userTag/UserTag';
function UserBar() {

    const [t, i18n] = useTranslation('common');
    const classes = 'p-1 m-1'
    return (
    <div className='p-1 user-bar d-flex align-items-center'>
        <UserAvatar />
        <UserTag />
        <div className="d-flex">
            <IconButton 
                icon="bi-mic-fill" 
                hover={true}
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.micTooltip')}/>
            <IconButton 
                icon="bi-headphones"
                hover={true}
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.audioTooltip')}/>
            <IconButton 
                icon="bi-gear-fill"
                hover={true} 
                cssClasses={classes} 
                background={false}  
                tooltipText={t('userBar.settingsTooltip')}/>
        </div>
    </div>
    );
}

export default UserBar;

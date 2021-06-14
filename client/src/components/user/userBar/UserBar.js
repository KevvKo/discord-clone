import './UserBar.css';
import {useTranslation} from "react-i18next";
import IconButton from '../../common/iconButton/IconButton';
import UserAvatar from '../userAvatar/UserAvatar';
import UserTag from '../userTag/UserTag';
function UserBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <div className='p-2 user-bar d-flex align-items-center'>
        <UserAvatar />
        <UserTag />
        <div className="d-flex">
            <IconButton icon="bi-mic-fill" background={false} size="sm"/>
            <IconButton icon="bi-headphones" background={false} size="sm"/>
            <IconButton icon="bi-gear-fill" background={false} size="sm"/>
        </div>
    </div>
    );
}

export default UserBar;

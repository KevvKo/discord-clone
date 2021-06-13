import './UserBar.css';
import {useTranslation} from "react-i18next";
import {Col} from 'react-bootstrap';
import IconButton from '../../common/iconButton/IconButton';
import UserAvatar from '../userAvatar/UserAvatar';
import UserTag from '../userTag/UserTag';
function UserBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <Col className='user-bar d-flex'>
        <UserAvatar />
        <UserTag />
        <div className="d-flex align-items-center">
            <IconButton icon="bi-mic-fill" background={false} size="sm"/>
            <IconButton icon="bi-headphones" background={false} size="sm"/>
            <IconButton icon="bi-gear-fill" background={false} size="sm"/>
        </div>
    </Col>
    );
}

export default UserBar;

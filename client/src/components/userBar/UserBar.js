import './UserBar.css';
import {useTranslation} from "react-i18next";
import {Col} from 'react-bootstrap';
import IconButton from '../common/iconButton/IconButton';

function UserBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <Col className='user-bar d-flex'>
        <div></div>
        <div className="d-flex align-items-center">
            <IconButton icon="bi-chat-square-fill"/>
            <IconButton icon="bi-people-fill"/>
            <IconButton icon="bi-gear-fill"/>
        </div>
    </Col>
    );
}

export default UserBar;

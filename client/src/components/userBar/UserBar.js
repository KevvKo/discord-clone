import './UserBar.css';
import SearchField from '../common/searchField/SearchField';
import {useTranslation} from "react-i18next";
import {Col} from 'react-bootstrap';

function UserBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <Col className='user-bar'>
    </Col>
    );
}

export default UserBar;

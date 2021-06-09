import './FriendsList.css';
import {Col} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
    <Col className="friends-list justify-content-start" md={2}>
      <h6 className="mt-3 ">
        {t('friendsList.title')}
      </h6>
    </Col>
  );
}

export default FriendsList;

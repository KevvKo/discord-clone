import './FriendsList.css';
import {Row, Col} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import IconButton from '../common/iconButton/IconButton'
function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
    <Col className="friends-list justify-content-start">
      <Row>
        <Col sm={9}>
          <h6 className="mt-3 ">
            {t('friendsList.title')}
          </h6>
        </Col>
        <Col>
          <IconButton icon="bi-plus" />
        </Col>
      </Row>
    </Col>
  );
}

export default FriendsList;

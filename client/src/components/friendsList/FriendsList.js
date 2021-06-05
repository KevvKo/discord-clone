import './FriendsList.css';
import {Container, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
      <Container className="friends-list d-flex justify-content-center flex-grow-1">
        <Row>
          <h6>
            {t('friendsList.title')}
          </h6>
        </Row>
      </Container>
  );
}

export default FriendsList;

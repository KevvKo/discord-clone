import './FriendsList.css';
import {Row, Col} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import IconButton from '../common/iconButton/IconButton'
function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
    <div className="friends-list flex-grow-1 justify-content-start pl-2">
      <div>
          <h6 className="mt-3 text-nowrap">
            {t('friendsList.title')}
          </h6>
          <IconButton icon="bi-plus" size="sm"/>
      </div>
    </div>
  );
}

export default FriendsList;

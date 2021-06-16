import './FriendsList.css';
import {useTranslation} from "react-i18next";
import IconButton from '../common/iconButton/IconButton'
function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
    <div className="friends-list flex-grow-1 justify-content-start pl-2">
      <div className="d-flex align-items-center mt-3">
          <h6 className="mb-0 flex-fill text-nowrap">
            {t('friendsList.title')}
          </h6>
          <IconButton icon="bi-plus" size="sm" />
      </div>
    </div>
  );
}

export default FriendsList;

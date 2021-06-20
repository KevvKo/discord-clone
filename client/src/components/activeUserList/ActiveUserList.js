import './ActiveUserList.css';
import {useTranslation} from "react-i18next";

function ActiveUserList() {

  const [t, i18n] = useTranslation('common');

  return (
    <div className="d-flex px-3 py-4 flex-column active-user-list" >
      <h4>{t('activeUserList.title')}</h4>
      <div className="mt-4">
        <div className="h6 text-center">
          {t('activeUserList.subTitle')}
        </div>
        <p className="text-center">
          {t('activeUserList.emptyListText')}
        </p>
      </div>
    </div>
  );
}

export default ActiveUserList;

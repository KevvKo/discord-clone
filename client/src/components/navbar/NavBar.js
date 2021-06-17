import './NavBar.css';
import {Col} from 'react-bootstrap';
import IconButton from '../common/iconButton/IconButton';
import {useTranslation} from "react-i18next";

function NavBar() {

  const [t, i18n] = useTranslation('common');

  return (
    <Col className="navbar d-flex">
      <div className="flex-fill"></div>
      <div className="icon-separator">
        <IconButton icon="bi-chat-left-fill" tooltipPlacement="bottom-start" tooltipText={t('navBar.newChatTooltip')}/>
      </div>
      <div className="">
        <IconButton icon="bi-inbox-fill" tooltipPlacement="bottom-start" tooltipText={t('navBar.inboxTooltip')} />
        <IconButton icon="bi-question-circle-fill" tooltipPlacement="bottom" tooltipText={t('navBar.helpTooltip')} />  
      </div>
    </Col>
  );
}

export default NavBar;

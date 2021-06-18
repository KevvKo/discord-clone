import './NavBar.css';
import {Col} from 'react-bootstrap';
import IconButton from '../common/iconButton/IconButton';
import {useTranslation} from "react-i18next";

function NavBar() {

  const [t, i18n] = useTranslation('common');
  const classes = 'p-0 mx-2'
  return (
    <Col className="navbar d-flex">
      <div className="flex-fill"></div>
      <div className="icon-separator">
        <IconButton icon="bi-chat-left-fill" size='lg' tooltipPlacement='bottom-start' cssClasses={classes} tooltipText={t('navBar.newChatTooltip')}/>
      </div>
      <div className="">
        <IconButton icon="bi-inbox-fill" size='lg' tooltipPlacement="bottom-start" cssClasses={classes} tooltipText={t('navBar.inboxTooltip')} />
        <IconButton icon="bi-question-circle-fill" size='lg' tooltipPlacement="bottom" cssClasses={classes} tooltipText={t('navBar.helpTooltip')} />  
      </div>
    </Col>
  );
}

export default NavBar;

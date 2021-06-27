import './TopBar.css';
import FilterTab from './filterTab/FilterTab';
import IconButton from '../buttons/iconButton/IconButton';
import { Row, Col } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function TopBar() {

    const [t, i18n] = useTranslation('common');
    const classes = 'p-0 mx-2'
        
    return (
        <Row className='topbar'>
            <Col className="navbar d-flex">
                <i className="bi bi-people-fill"></i>
                <div className='h5 mb-0 pr-2 mx-2'>
                    {t('topBar.friendView.title')}
                </div>  
                <div className="separator"></div>
                <div className="flex-fill">    
                    <FilterTab text={t('topBar.friendView.onlineTab')}/>  
                    <FilterTab text={t('topBar.friendView.allTab')}/>  
                    <FilterTab text={t('topBar.friendView.pendingTab')}/>  
                    <FilterTab text={t('topBar.friendView.blockedTab')}/>  
                    <FilterTab text={t('topBar.friendView.addFriendTab')} variant='success'/>  
                </div>
                <div>
                    <IconButton icon="bi-chat-left-fill" size='lg' tooltipPlacement='bottom-start' cssClasses={classes} tooltipText={t('topBar.newChatTooltip')}/>
                </div>
                <div className="separator"></div>
                <div>
                    <IconButton icon="bi-inbox-fill" size='lg' tooltipPlacement="bottom-start" cssClasses={classes} tooltipText={t('topBar.inboxTooltip')} />
                    <IconButton icon="bi-question-circle-fill" size='lg' tooltipPlacement="bottom" cssClasses={classes} tooltipText={t('topBar.helpTooltip')} />  
                </div>
            </Col>
        </Row>
    );
}

export default TopBar;

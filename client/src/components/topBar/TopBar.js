import './TopBar.css';
import FilterTab from './filterTab/FilterTab';
import IconButton from '../common/iconButton/IconButton';
import { Row, Col } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function TopBar() {

    const [t, i18n] = useTranslation('common');
    const classes = 'p-0 mx-2'
        
    return (
        <Row className='topbar'>
            <Col className="navbar d-flex">
                <div className="flex-fill">
                                    
                    <FilterTab text={t('topBar.friendView.onlineTab')}/>  
                    <FilterTab text={t('topBar.friendView.allTab')}/>  
                    <FilterTab text={t('topBar.friendView.pendingTab')}/>  
                    <FilterTab text={t('topBar.friendView.blockedTab')}/>  
                </div>
                <div className="icon-separator">
                    <IconButton icon="bi-chat-left-fill" size='lg' tooltipPlacement='bottom-start' cssClasses={classes} tooltipText={t('topBar.newChatTooltip')}/>
                </div>
                <div className="">
                    <IconButton icon="bi-inbox-fill" size='lg' tooltipPlacement="bottom-start" cssClasses={classes} tooltipText={t('topBar.inboxTooltip')} />
                    <IconButton icon="bi-question-circle-fill" size='lg' tooltipPlacement="bottom" cssClasses={classes} tooltipText={t('topBar.helpTooltip')} />  
                </div>
            </Col>
        </Row>
    );
}

export default TopBar;

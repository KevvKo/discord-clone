import React from 'react';
import './FilterBar.css';
import FilterTab from './filterTab/FilterTab';
import IconButton from '../buttons/iconButton/IconButton';
import { Row, Col } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

function FilterBar() {

    const [t] = useTranslation('common');
    const classes = 'p-0 mx-2';
        
    return (
        <Row className='filterbar'>
            <Col className='navbar d-flex'>
                <i className='bi bi-people-fill'></i>
                <div className='h5 mb-0 pr-2 mx-2'>
                    {t('topBar.friendView.title')}
                </div>  
                <div className='separator'></div>
                <div className='flex-fill'>    
                    <FilterTab text={t('topBar.friendView.onlineTab')}/>  
                    <FilterTab text={t('topBar.friendView.allTab')}/>  
                    <FilterTab text={t('topBar.friendView.pendingTab')}/>  
                    <FilterTab text={t('topBar.friendView.blockedTab')}/>  
                    <FilterTab text={t('topBar.friendView.addFriendTab')} variant='success'/>  
                </div>
                <div className='d-flex flex-nowrap'>
                    <div>
                        <IconButton icon='bi-chat-left-fill' size='lg' tooltipPlacement='bottom-start' cssClasses={classes} tooltipText={t('topBar.newChatTooltip')}/>
                    </div>
                    <div className='separator'></div>
                    <div>
                        <IconButton icon='bi-inbox-fill' size='lg' tooltipPlacement='bottom-start' cssClasses={classes} tooltipText={t('topBar.inboxTooltip')} />
                        <IconButton icon='bi-question-circle-fill' size='lg' tooltipPlacement='bottom' cssClasses={classes} tooltipText={t('topBar.helpTooltip')} />  
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default FilterBar;

import React from 'react';
import './FriendsList.css';
import { useTranslation } from 'react-i18next';
import ListTab from '../listTab/ListTab';
import IconButton from '../buttons/iconButton/IconButton';
function FriendsList() {

    const [t] = useTranslation('common');

    return (
        <div className='friends-list pl-2'>
            <ul className="p-0">
                <ListTab 
                    icon='people-fill'
                    text='Friends'
                />
                <ListTab 
                    icon='joystick'
                    text='Nitro'
                />
            </ul>
            <div className='d-flex align-items-center mt-3'>
                <h6 className='mb-0 flex-fill text-nowrap'>
                    {t('friendsList.title')}
                </h6>
                <IconButton icon='bi-plus' size='lg' cssClasses='p-0 pr-1 mr-1' tooltipText={t('friendsList.newMessageTooltip')}/>
            </div>
            <ul className="p-0">
                <ListTab 
                    icon='person-circle'
                    text='Kevin'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Benny'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Marius'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Anna'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Basti'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Felix'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Simon'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Olivia'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Phili'
                    closeButton={true}
                />
                <ListTab 
                    icon='person-circle'
                    text='Josi'
                    closeButton={true}
                />
            </ul>
        </div>
    );
}

export default FriendsList;

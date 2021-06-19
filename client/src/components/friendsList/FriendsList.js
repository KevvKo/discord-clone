import './FriendsList.css';
import { useTranslation } from 'react-i18next';
import NavBarItem from './navBarItem/NavBarItem';
import IconButton from '../common/iconButton/IconButton';
function FriendsList() {

  const [t, i18n] = useTranslation('common');

  return (
    <div className='friends-list justify-content-start pl-2'>
      <ul className="p-0">
        <NavBarItem 
          icon='people-fill'
          text='Friends'
        />
        <NavBarItem 
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
        <NavBarItem 
          icon='person-fill'
          text='Friends'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Kevin'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Benny'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Marius'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Anna'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Basti'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Felix'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Simon'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Olivia'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Phili'
          closeButton={true}
        />
        <NavBarItem 
          icon='person-fill'
          text='Josi'
          closeButton={true}
        />
      </ul>
    </div>
  );
}

export default FriendsList;

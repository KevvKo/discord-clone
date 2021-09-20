import React from 'react';
import './Avatar.css';
// Components
import { Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function Avatar(){

    const [ t ] = useTranslation('common');

    return(
        <div className='Avatar mb-5'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.avatar')}
            </div>
            <Button className='mr-2' size='sm'>               
                {t('settings.main.userProfile.changeAvatar')}
            </Button>
            <Button variant='link'  size='sm'>
                {t('settings.main.userProfile.removeAvatar')}
            </Button>
        </div>
    );
}

export default Avatar;
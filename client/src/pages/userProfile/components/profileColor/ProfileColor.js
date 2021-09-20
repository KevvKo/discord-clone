import React from 'react';
import './ProfileColor.css';
// Components
import { Button } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';

function ProfileColor(){

    const [ t ] = useTranslation('common');

    return(
        <div className='profile-color'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.profileColor')}
            </div>
            <div className='d-flex'>
                <div className='mr-3'>
                    <div className='color-panel-default'></div>
                    <p className='text-center'>{t('settings.main.userProfile.default')}</p>
                </div>
                <div>
                    <div className='color-panel-customized'></div>
                    <p className='text-center'>{t('settings.main.userProfile.customized')}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileColor;
import React from 'react';
import './ProfileColor.css';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function ProfileColor(){

    const [ t ] = useTranslation('common');
    const [ customizedColor, setCustomizedColor ] = useState(''); 
    const profileColor = useSelector( state => state.userProfile.color );
    
    const handleInput = (e) => {
        setCustomizedColor(e.target.value);
    };

    useEffect( () => {
        document.querySelector('.color-panel-customized').style.background = customizedColor;
    }, [customizedColor]);
    return(
        <div className='profile-color mb-5'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.profileColor')}
            </div>
            <div className='d-flex'>
                <div className='mr-3'>
                    <div className='color-panel-default'></div>
                    <p className='text-center'>{t('settings.main.userProfile.default')}</p>
                </div>
                <div>
                    <div className='color-panel-customized'>
                        <input id='color-picker' type='color' onInput={ handleInput } onChange={ handleInput }></input>
                    </div>
                    <p className='text-center'>{t('settings.main.userProfile.customized')}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileColor;
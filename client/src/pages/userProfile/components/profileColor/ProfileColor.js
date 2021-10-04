import React from 'react';
import './ProfileColor.css';
import PropTypes from 'prop-types';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileColor } from '../../../../store/slices/userProfileSlice';
function ProfileColor(props){

    const defaultColor = '#939394';
    const dispatch  = useDispatch();
    const [ t ] = useTranslation('common');
    const [ customizedColor, setCustomizedColor ] = useState('');
    const profileColor = useSelector( state => state.userProfile.color );
    const setProfileChanged = props.onChange;
    let customizedStyle = {
        background: `${customizedColor}`
    };

    const handleInput = (e) => {
        setCustomizedColor(e.target.value);
        dispatch( setProfileColor( e.target.value ));
        setProfileChanged();
    };

    const handleClick = () => {
        setCustomizedColor( defaultColor );
        dispatch( setProfileColor( defaultColor ));
        setProfileChanged();
    };

    useEffect( () => {
        if( profileColor ){
            setCustomizedColor( profileColor );
        }
    }, [profileColor]);

    return(
        <div className='profile-color mb-5'>
            <div className='subtitle mb-3'>
                {t('settings.main.userProfile.profileColor')}
            </div>
            <div className='d-flex'>
                <div className='mr-3'>
                    <div className='color-panel-default d-flex justify-content-center' onClick={ handleClick }>
                        { defaultColor === customizedColor &&
                            <i className="bi bi-check"></i>
                        }
                    </div>
                    <p className='text-center'>{t('settings.main.userProfile.default')}</p>
                </div>
                <div>
                    <div className='color-panel-customized' style={ customizedStyle }>
                        { defaultColor !== customizedColor &&
                            <i id='custom-check' className='bi bi-check'></i>
                        }                        
                        <input id='color-picker' type='color' onInput={ handleInput } onChange={ handleInput }></input>
                    </div>
                    <p className='text-center'>{t('settings.main.userProfile.customized')}</p>
                </div>
            </div>
        </div>
    );
}

ProfileColor.propTypes = {
    onChange: PropTypes.func
};

export default ProfileColor;
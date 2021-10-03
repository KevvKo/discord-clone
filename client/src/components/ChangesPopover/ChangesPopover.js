import React from 'react';
import './ChangesPopover.css';
// Utilities
import PropTypes from 'prop-types';
// Components
import { Button } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function ChangesPopover(props){

    const [ t ] = useTranslation('common');
    return(
        <>  
            { props.show && 
            <div className='changes-popover d-flex p-2' centered show={ props.show } onHide={props.handleOnHide} >
                <span className='d-flex align-items-center'>{t('settings.main.userProfile.unsaved')}</span>
                <Button className='ml-auto' variant='link' size='sm'>{t('settings.main.userProfile.reset')}</Button>
                <Button variant='success' size='sm'>{t('settings.main.userProfile.saveChanges')}</Button>
            </div>
            }
        </> 
    );
}

export default ChangesPopover;

ChangesPopover.defaultProps = {
    show: false
};

ChangesPopover.propTypes = {
    show: PropTypes.bool,
    handleOnHide: PropTypes.func,

};
import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, Modal } from 'react-bootstrap';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
// Utilities
import { CHANGE_ACTIVE } from '../../../../graphql/mutations';

function DeactivateAccount(props){

    const [ t ] = useTranslation('common');
    const [ changeActive ] = useMutation(CHANGE_ACTIVE, {
        variables: {
            active: false
        },
        onCompleted: () => {
            window.location.reload();
        }, 
        onError: (error) => {
            alert(error);
        }            
    });

    return(
        <Modal centered show={ props.show } onHide={ props.callback } >
            <Modal.Header className='pb-0' closeButton>
                <Modal.Title className='ml-auto'>
                    {t('settings.main.myAccount.deactivateAccount')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <p>{t('settings.main.myAccount.deactivateAccountDescription')}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='link' onClick={props.callback}>{ t('settings.main.myAccount.cancel') }</Button>
                <Button variant='primary' onClick={ changeActive }>{ t('settings.main.myAccount.continue') }</Button>
            </Modal.Footer>
        </Modal>
    );
}

DeactivateAccount.defaultProps = {
    show: false
};

DeactivateAccount.propTypes = {
    callback: PropTypes.func,
    show: PropTypes.bool
};
export default DeactivateAccount;
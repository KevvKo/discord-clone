import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button } from 'react-bootstrap';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
// Utilities
import { CHANGE_ACTIVE } from '../../../../graphql/user/userMutations';

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
    const buttons = (
        <>
            <Button variant='link' onClick={props.callback}>{ t('settings.main.myAccount.cancel') }</Button>
            <Button variant='primary' onClick={ changeActive }>{ t('settings.main.myAccount.continue') }</Button>
        </>
    );

    return(
        <FormModal modalTitle={t('settings.main.myAccount.deactivateAccount')} show={props.show} handleOnHide={props.callback} footerChildren={ buttons }>
            <p>{t('settings.main.myAccount.deactivateAccountDescription')}</p>
        </FormModal>
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
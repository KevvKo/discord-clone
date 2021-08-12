import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

import { 
    Button,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';

function RegistrationSubmit(props){

    const [t] = useTranslation('common');
    const { checked } = props;

    if(checked){
        return (
            <Button variant='primary' type="submit" block>
                {t('register.submit')}
            </Button> 
        );
    }

    return ( 
        <OverlayTrigger
            placement={'top'}
            overlay={
                <Tooltip id={'termsTooltip'}>
                    {t('error.terms.required')}
                </Tooltip>
            }
        >
            <Button variant='primary' type="submit" block disabled>
                {t('register.submit')}
            </Button> 
        </OverlayTrigger>
    );
}

RegistrationSubmit.propTypes = {
    checked: PropTypes.bool
};

export default RegistrationSubmit;
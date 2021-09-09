import React from 'react';
import './DeleteAccount.css';

// Components
import { Col } from 'react-bootstrap';
// Hooks
import { useTranslation } from 'react-i18next';

function DeleteAccount(){

    const [ t ] = useTranslation('common');

    return(
        <Col className='delete-account flex-column mt-5 px-4'>
        </Col>
    );
}

export default DeleteAccount;
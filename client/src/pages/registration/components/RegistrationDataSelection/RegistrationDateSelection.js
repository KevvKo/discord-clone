import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Col, Row } from 'react-bootstrap';
import Select from '../../../../components/forms/select/Select';
// hooks and services
import { range } from '../../../../scripts/utils';
import useAuth from '../../../../hooks/useAuthentification';

function RegistrationDateSelection(props){

    const days = Array.from({length:31}, (v, k) => k+1 );
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    
    const year = new Date().getFullYear();
    const years = range(year, 1900, -1);
    
    const { handleSelect } = useAuth();
    
    return ( 
        <Row>
            <Col>
                <Select data={days} name={'day'} onChange={ handleSelect } errors={ props.errors.day } />
            </Col>
            <Col>
                <Select data={months} name={'month'} onChange={ handleSelect } errors={ props.errors.month }/>
            </Col>
            <Col>
                <Select data={years} name='year' onChange={ handleSelect } errors={ props.errors.year }/>
            </Col>
        </Row>
    );
}

RegistrationDateSelection.propTypes = {
    errors: PropTypes.object
};

export default RegistrationDateSelection;
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Col } from 'react-bootstrap';
import Select from '../../../../components/forms/select/Select';

// hooks and services
import { range } from '../../../../services/utils';
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
        <>
            <Col>
                <Select data={days} name={'day'} onChange={ handleSelect }/>
            </Col>
            <Col>
                <Select data={months} name={'month'} onChange={ handleSelect }/>
            </Col>
            <Col>
                <Select data={years} name='year' onChange={ handleSelect }/>
            </Col>
        </>
    );
}

// RegistrationDataSelection.propTypes = {
//     checked: PropTypes.bool
// };

export default RegistrationDateSelection;
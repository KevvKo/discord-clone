import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Col, Row } from 'react-bootstrap';
import Select from '../../../../components/forms/select/Select';
import FormFeedback from '../../../../components/forms/formFeedback/FormFeedback';
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
            <FormFeedback error={ props.errors.day }>
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
            </FormFeedback>
        </>
    );
}

RegistrationDateSelection.propTypes = {
    name: PropTypes.string,
    errors: PropTypes.object
};

export default RegistrationDateSelection;
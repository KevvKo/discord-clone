import React from 'react';
import './SearchField.css';
import { PropTypes } from 'prop-types';
// Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function SearchField(props) {

    if ( props.type === 'button' ){
        return <Button className='search-field text-nowrap text-left' variant='flat' size='sm' role='button'>{props.placeholder}</Button>;
    }    
    return <Form.Control className='search-field text-nowrap' type='text' placeholder={props.placeholder} />;
}

SearchField.defaultProps = {
    type: 'input',
    placeholder: ''
};

SearchField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string

};
export default SearchField;

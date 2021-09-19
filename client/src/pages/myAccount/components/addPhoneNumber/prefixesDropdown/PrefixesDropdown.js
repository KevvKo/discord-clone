import React from 'react';
import './PrefixDropdown.css';
import PropTypes from 'prop-types';
// Components
import { Dropdown, DropdownButton } from 'react-bootstrap';
//HOoks
import { useState } from 'react';
// Utilites
import { countryPrefix } from '../../../../../services/utils';

function PrefixDropdown(props){

    const prefixes = countryPrefix();
    const [ dropdownTitle, setDropdownTitle ] = useState( `${ prefixes[ Object.keys( prefixes )[0] ] }` );
    let dropdownItems = [];

    for ( const [key, value] of Object.entries(prefixes)){
        dropdownItems.push(
            <Dropdown.Item eventKey={ value }>
                <div className='d-flex'>
                    {key}<b className='ml-auto'>{value}</b>
                </div>
            </Dropdown.Item>
        );
    }

    const handleSelect = (e) => {
        props.onSelect(e);
        setDropdownTitle(e);
    };

    return (
        <DropdownButton 
            name='test'     
            className='prefix-dropdown' 
            variant='secondary' 
            onSelect={ handleSelect } 
            title={dropdownTitle}
        >{dropdownItems}</DropdownButton>
    );
}

PrefixDropdown.propTypes = {
    onSelect: PropTypes.func
};

export default PrefixDropdown;
import React from 'react';
import './PrefixDropdown.css';
import PropTypes from 'prop-types';
// Components
import { Dropdown, DropdownButton } from 'react-bootstrap';
//Hooks
import { useEffect, useState } from 'react';
// Utilites
import { countryPrefix } from '../../../../../services/utils';

function PrefixDropdown(props){

    const prefixes = countryPrefix();
    const [ dropdownTitle, setDropdownTitle ] = useState( `${ prefixes[ Object.keys( prefixes )[0] ] }` );
    let dropdownItems = [];
    
    useEffect(() => {
        // too set the first prefix after rendering
        props.onSelect(dropdownTitle);
    });

    for ( const [key, value] of Object.entries(prefixes)){
        dropdownItems.push(
            <Dropdown.Item eventKey={ value } key={key}>
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
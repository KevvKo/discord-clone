import React from 'react';
import './PrefixDropdown.css';
import PropTypes from 'prop-types';
// Components
import { Dropdown, DropdownButton } from 'react-bootstrap';
// Utilites
import { countryPrefix } from '../../../../../services/utils';

function PrefixDropdown(){

    const prefixes = countryPrefix();
    const dropdownTitle = `${ prefixes[ Object.keys( prefixes )[0] ] }`;
    let dropdownItems = [];

    for ( const [key, value] of Object.entries(prefixes)){
        dropdownItems.push(
            <Dropdown.Item>
                <div className='d-flex'>
                    {key}<b className='ml-auto'>{value}</b>
                </div>
            </Dropdown.Item>
        );
    }

    return (
        <DropdownButton className='prefix-dropdown' variant='secondary' onSelect={ props.onSelect } title={dropdownTitle}>
            {dropdownItems}
        </DropdownButton>
    );
}

PrefixDropdown.prototype = {
    onSelect: PropTypes.func
};

export default PrefixDropdown;
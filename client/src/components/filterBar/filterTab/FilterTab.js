import React from 'react';
import PropTypes from 'prop-types';
import './FilterTab.css';
import { Button } from 'react-bootstrap';
function FilterTab(props) {
        
    return (
        <Button className='filter-tab mx-2' variant={props.variant} size='sm'>
            {props.text}
        </Button>
    );
}

FilterTab.defaultProps = {
    variant: 'flat'
};

FilterTab.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string
};

export default FilterTab;

import React from 'react';
import PropTypes from 'prop-types';
import './ListTab.css';

function ListTab(props) {

    return (
        <li className='list-tab d-flex align-items-center mt-1 mr-1 p-1'>
            { props.children }
        </li>
    );
}

ListTab.propTypes = {
    children: PropTypes.node.isRequired

};

export default ListTab;

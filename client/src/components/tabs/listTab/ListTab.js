import React from 'react';
import PropTypes from 'prop-types';
import './ListTab.css';

import { Link } from 'react-router-dom';

function ListTab(props) {

    const callback = () => {
        props.callback();
    };

    if(props.callback){
        return(
            <li className='list-tab d-flex align-items-center mt-1 mr-1 p-1' onClick={callback}>
                { props.children }
            </li>
        );
    }

    return (
        <li className='list-tab d-flex align-items-center mt-1 mr-1 p-1' >
            <Link to=''>
                { props.children }
            </Link>
        </li>
    );
}

ListTab.propTypes = {
    children: PropTypes.node.isRequired,
    callback: PropTypes.func

};

export default ListTab;

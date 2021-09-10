import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Modal } from 'react-bootstrap';

function EditUserName(props){
    return(
        <Modal show={props.show} >
        </Modal>
    );
}

EditUserName.defaultProps = {
    show: false
};

EditUserName.propTypes = {
    show: PropTypes.bool
};
export default EditUserName;
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
function FormFeedback(props){

    return(
        <Form.Group className="form-feedback" onChange={ props.onChange }>
            {props.children}
            <Form.Control.Feedback type="invalid">
                {props.error}
            </Form.Control.Feedback>     
        </Form.Group>
    );
}
FormFeedback.propTypes = {
    onChange: PropTypes.function,
    children: PropTypes.node.isRequired,
    error: PropTypes.string,
};

export default FormFeedback;

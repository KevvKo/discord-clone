import { Form } from 'react-bootstrap';

function FormFeedback(props){
    return(
    <Form.Group className="form-feedback" onChange={ props.onChange }>
        {props.children}
        <Form.Control.Feedback type="invalid">
            This field is required
        </Form.Control.Feedback>     
    </Form.Group>
    );
}

export default FormFeedback;

import { Form } from 'react-bootstrap';

function FormInput(props){
    return(
    <Form.Group onChange={ props.onChange }>
        <Form.Label>
            {props.label}
        </Form.Label>
        <Form.Control required name={ props.name } type={props.type}></Form.Control>
        <Form.Control.Feedback type="invalid">
            {props.error}
        </Form.Control.Feedback>
    </Form.Group>
    );
}

export default FormInput;

FormInput.defaultProps = {
    label: 'Label',
    type: 'text'
}
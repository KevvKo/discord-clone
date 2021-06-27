import './FormInput.css';
import { Form } from 'react-bootstrap';

function FormInput(props){
    return(
        <Form.Group>
        <Form.Label>
            {props.label}
        </Form.Label>
        <Form.Control type={props.type}></Form.Control>
    </Form.Group>
    );
}

export default FormInput;

FormInput.defaultProps = {
    label: 'Label',
    type: 'text'
}
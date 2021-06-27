import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './SearchField.css';
function SearchField(props) {

    const buttonType = props.type;
    let searchField;

    if ( buttonType === 'button' ){
        searchField = <Button className='search-field text-nowrap text-left' variant='flat' size='sm'>{props.placeholder}</Button>
    } else if( buttonType === 'input' ){
        searchField = <Form.Control className='search-field text-nowrap' type='text' placeholder={props.placeholder} />
    }; 

    return (
        searchField
    );
}

SearchField.defaultProps = {
    type: 'input'
}

export default SearchField;

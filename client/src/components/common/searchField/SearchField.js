import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './SearchField.css';
import {useTranslation} from "react-i18next";

function SearchField(props) {

    const [t, i18n] = useTranslation('common');
    const buttonType = props.type;
    let searchField;

    if ( buttonType === 'button' ){
        searchField = <Button className='search-field' variant='flat' size='sm'>{props.placeholder}</Button>
    } else if( buttonType === 'input' ){
        searchField = <Form.Control className='search-field' type='text' placeholder={props.placeholder} />
    }; 

    return (
        searchField
    );
}

SearchField.defaultProps = {
    type: 'input'
}

export default SearchField;

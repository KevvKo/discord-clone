import Button from 'react-bootstrap/Button';
import './SearchField.css';
import {useTranslation} from "react-i18next";

function SearchField(props) {

    const [t, i18n] = useTranslation('common');

    return (
        
        <Button className='search-field' variant='flat' size='sm'>{props.placeholder}</Button>
    );
}

export default SearchField;

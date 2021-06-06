import './SearchBar.css';
import Button from 'react-bootstrap/Button';
import {useTranslation} from "react-i18next";

function SearchBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <div className="search-bar">
        <Button variant="secondary" size={'sm'}>{t('searchBar.searchButtonName')}</Button>
    </div>
    );
}

export default SearchBar;

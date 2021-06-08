import './SearchBar.css';
import SearchField from '../common/searchField/SearchField';
import {useTranslation} from "react-i18next";

function SearchBar() {

    const [t, i18n] = useTranslation('common');

    return (
    <div className='search-bar d-flex justify-content-center p-2'>
        <SearchField type="button" placeholder={ t('searchBar.searchFieldPlaceHolder') } />
    </div>
    );
}

export default SearchBar;

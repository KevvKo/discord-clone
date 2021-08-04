import React from 'react';
import './SearchBar.css';
import SearchField from '../searchField/SearchField';
import {useTranslation} from 'react-i18next';

function SearchBar() {

    const [t] = useTranslation('common');

    return (
        <div className='search-bar d-flex justify-content-center p-2' md={2}>
            <SearchField type='button' placeholder={ t('searchBar.searchFieldPlaceHolder') } />
        </div>
    );
}

export default SearchBar;

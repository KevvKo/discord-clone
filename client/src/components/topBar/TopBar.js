import './TopBar.css';
import SearchBar from '../searchBar/SearchBar';
import NavBar from '../navbar/NavBar';
import {Row} from 'react-bootstrap';

function TopBar() {

    
    return (
        <Row className='top-bar'>
            <SearchBar />
            <NavBar />
        </Row>
    );
}

export default TopBar;

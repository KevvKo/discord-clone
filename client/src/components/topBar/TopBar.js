import './TopBar.css';
import NavBar from '../navbar/NavBar';
import {Row} from 'react-bootstrap';

function TopBar() {

    
    return (
        <Row className='top-bar'>
            <NavBar />
        </Row>
    );
}

export default TopBar;

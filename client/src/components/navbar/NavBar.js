import './NavBar.css';
import {Col} from 'react-bootstrap';
import IconButton from '../common/iconButton/IconButton'
function NavBar() {

  return (
    <Col className="navbar">
      <div>
        <IconButton icon="bi-chat-left-fill" />
        <IconButton icon="bi-inbox-fill" />
        <IconButton icon="bi-question-circle-fill" />  
      </div>
    </Col>
  );
}

export default NavBar;

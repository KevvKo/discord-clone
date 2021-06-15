import './NavBar.css';
import {Col} from 'react-bootstrap';
import IconButton from '../common/iconButton/IconButton'
function NavBar() {

  return (
    <Col className="navbar d-flex">
      <div className="flex-fill"></div>
      <div className="icon-separator">
        <IconButton icon="bi-chat-left-fill" />
      </div>
      <div className="">
        <IconButton icon="bi-inbox-fill" />
        <IconButton icon="bi-question-circle-fill" />  
      </div>
    </Col>
  );
}

export default NavBar;

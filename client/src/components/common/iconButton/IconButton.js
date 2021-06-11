import './IconButton.css';
import {Button} from 'react-bootstrap';

function IconButton(props) {

  const  iconClassName = `bi ${props.icon}`;

  return (
    <Button className="icon-button" variant="flat" size={props.size}>
      <i className={iconClassName}></i>
    </Button>
  );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    hover: true,
    background: true,
    size: 'md'
  };

export default IconButton;


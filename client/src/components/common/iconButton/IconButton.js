import './IconButton.css';
import { Button, Overlay, Tooltip, OverlayTrigger } from 'react-bootstrap';
function IconButton(props) {

  const  iconClassName = `bi ${props.icon}`;

  return (
    <OverlayTrigger 
      placement='top' 
      overlay={
        <Tooltip>
          Test
        </Tooltip>
      }
    >
      <Button className={`icon-button ${props.cssClasses}`} variant="flat" size={props.size}>
        <i className={iconClassName}></i>
      </Button>
    </OverlayTrigger>
  );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    hover: true,
    background: true,
    size: 'md',
    cssClasses: ''

  };

export default IconButton;


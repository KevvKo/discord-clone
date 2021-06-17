import './IconButton.css';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
function IconButton(props) {

  const  iconClassName = `bi ${props.icon}`;
  // if(props.tooltipText) setShow(true);

  return (
    <OverlayTrigger 
      placement={props.tooltipPlacement}
      overlay={
        <Tooltip>
          {props.tooltipText}
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
    cssClasses: '',
    tooltipText: '',
    tooltipPlacement: 'top'
  };

export default IconButton;


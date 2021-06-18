import './IconButton.css';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
function IconButton(props) {

  const iconClassNames = `bi ${props.icon}`;
  let buttonClassNames = '';
  
  props.hover 
    ? buttonClassNames += 'icon-hover-bg'
    : buttonClassNames += 'icon-hover';

  return (
    <OverlayTrigger 
      placement={props.tooltipPlacement}
      overlay={
        <Tooltip>
          {props.tooltipText}
        </Tooltip>
      }
    >
      <Button className={`icon-button ${props.cssClasses} ${ buttonClassNames}`} variant="flat" size={props.size}>
        <i className={iconClassNames}></i>
      </Button>
    </OverlayTrigger>
  );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    iconSize: '',
    hover: false,
    background: true,
    size: 'md',
    cssClasses: 'p-0',
    tooltipText: '',
    tooltipPlacement: 'top'
  };

export default IconButton;


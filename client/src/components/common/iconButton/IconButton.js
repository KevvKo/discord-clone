import './IconButton.css';

function IconButton(props) {

  const  iconClassName = `bi ${props.icon}`;

  return (
    <span className="icon-button ml-1 mr-1">
      <i className={iconClassName}></i>
    </span>
  );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    hover: true,
    background: true
  };

export default IconButton;


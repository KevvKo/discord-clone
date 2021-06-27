import './ChannelTab.css';

function ChannelTab(props) {

  const icon= `bi ${props.icon} align-self-center`;
  const classNames = props.defaultBehaviour 
    ? 'default-hover channel-tab d-flex justify-content-center' 
    : 'channel-tab d-flex justify-content-center';
  
    return (
      <div className={classNames}>
          <i className={icon}></i>
      </div>
  );
}

ChannelTab.defaultProps = {
  icon: 'bi-person-fill',
  hover: true,
  background: true,
  size: 'md',
  defaultBehaviour: true
};


export default ChannelTab;


import './ChannelTab.css';

function ChannelTab(props) {

  const icon= `bi ${props.icon} align-self-center`
  return (
      <div className="channel-tab d-flex justify-content-center">
          <i className={icon}></i>
      </div>
  );
}

ChannelTab.defaultProps = {
  icon: 'bi-person-fill',
  hover: true,
  background: true,
  size: 'md'
};


export default ChannelTab;


import './ChannelList.css';
import ChannelTab from '../channelTab/ChannelTab'
import {Row, Col} from 'react-bootstrap';
function ChannelList() {

  return (
    <div className="channel-list" md={1}>
      <div className="p-2 justify-content-center">
        <ChannelTab />
      </div>
    </div>
  );
}

export default ChannelList;

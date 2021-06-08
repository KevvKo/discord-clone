import './ChannelList.css';
import ChannelTab from '../channelTab/ChannelTab'
import {Row} from 'react-bootstrap';
function ChannelList() {

  return (
    <div className="channel-list flex-grow-1">
      <Row className="justify-content-center">
        <ChannelTab />
      </Row>
    </div>
  );
}

export default ChannelList;

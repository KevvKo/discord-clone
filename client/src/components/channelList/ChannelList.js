import './ChannelList.css';
import ChannelTab from '../channelTab/ChannelTab'
import {Row, Col} from 'react-bootstrap';
function ChannelList() {

  return (
    <Col className="channel-list" md={1}>
      <Row className="justify-content-center">
        <ChannelTab />
      </Row>
    </Col>
  );
}

export default ChannelList;

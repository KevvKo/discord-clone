import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppHeader from '../components/header/AppHeader';
import TopBar from '../components/topBar/TopBar';
import AppMain from '../components/main/AppMain';
import FriendsList from '../components/friendsList/FriendsList';
import ChannelList from '../components/channelList/ChannelList';
import ActiveUserList from '../components/activeUserList/ActiveUserList';


function App() {

  return (
    <Container className="App d-flex flex-column h-100" fluid>
      <Row >
        <AppHeader />
      </Row>
      <Row className="flex-fill">
        <ChannelList />
        <Col className="d-flex flex-column">
          <TopBar />
          <Row className="flex-fill">
            <FriendsList />
            <AppMain />
            <ActiveUserList />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

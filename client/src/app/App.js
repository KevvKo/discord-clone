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
import UserBar from '../components/user/userBar/UserBar';
import SearchBar from '../components/searchBar/SearchBar';

function App() {

  return (
    <Container className="App d-flex flex-column h-100" fluid>
      <Row >
        <AppHeader />
      </Row>
      <Row className="flex-fill">
        <ChannelList />
        <div className="d-flex flex-column">
              <SearchBar />
              <FriendsList />
              <UserBar />
            </div>
        <Col className="d-flex flex-column">
          <TopBar />
          <Row className="flex-fill">
            <AppMain />
            <ActiveUserList />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

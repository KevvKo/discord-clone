import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppHeader from '../components/header/AppHeader';
import SearchBar from '../components/searchBar/SearchBar'
import NavBar from '../components/navbar/NavBar';
import AppMain from '../components/main/AppMain';
import FriendsList from '../components/friendsList/FriendsList';
import ChannelList from '../components/channelList/ChannelList';
import ActiveUserList from '../components/activeUserList/ActiveUserList';


function App() {

  return (
    <Container className="App d-flex flex-column h-100" fluid="true">
      <Row noGutters={true}>
        <AppHeader />
      </Row>
      <Row className="d-flex flex-fill" noGutters={true}>
        <Col className="d-flex" md={1}>
          <ChannelList />
        </Col>
        <Col className="d-flex">
          <Row className="flex-fill" noGutters={true}>
            <Col className="d-flex">
              <Row className="flex-grow-1" noGutters={true}>
                <Col className="d-flex flex-column col-auto">
                  <Row noGutters={true}>
                    <Col>
                      <SearchBar />
                    </Col>
                  </Row>
                  <Row className="flex-fill" noGutters={true}>
                    <Col className="d-flex">
                      <FriendsList />
                    </Col>
                  </Row>
                </Col>
                <Col className="d-flex flex-column">
                  <Row noGutters={true}>
                    <Col >
                      <NavBar />
                    </Col>
                  </Row>
                  <Row className="flex-fill" noGutters= {true}>
                    <Col className="d-flex">
                        <AppMain />
                    </Col>
                    <Col className="d-flex" md={2}>
                        <ActiveUserList />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

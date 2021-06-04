import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppHeader from '../components/header/AppHeader'
import AppMain from '../components/main/AppMain'
import AppSideBar from '../components/sidebar/AppSideBar'
import AppFooter from '../components/footer/AppFooter'

function App() {

  return (
    <div className="App">
      <Container fluid="true">
        <Row>
          <AppHeader />
        </Row>
        <Row>
          <Col>
            <AppSideBar />
          </Col>
          <Col>
            <AppMain />
          </Col>
        </Row>
        <Row>
          <AppFooter/>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

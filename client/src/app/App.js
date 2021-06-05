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
      <Container className="d-flex flex-column h-100" fluid="true">
        <Row noGutters={true}>
          <AppHeader />
        </Row>
        <Row className="" noGutters={true}>
          <Col md={3}>
            <AppSideBar />
          </Col>
          <Col md={9}>
            <AppMain />
          </Col>
        </Row>
        <Row className="fixed-bottom" noGutters={true}>
          <AppFooter/>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

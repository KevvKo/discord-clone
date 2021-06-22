import './App.css';
import Container from 'react-bootstrap/Container';
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';

function App() {

  const isLogged = false;

  return (
    <Container className="App d-flex flex-column h-100" fluid>
      {isLogged
        ?
          <Home />
        :
          <Login />
      }
    </Container>
  );
}

export default App;

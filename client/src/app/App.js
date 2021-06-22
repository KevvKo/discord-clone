import './App.css';
import Container from 'react-bootstrap/Container';
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const isLogged = false;

  return (
    <Router>
      <Container className="App d-flex flex-column h-100" fluid>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact='/' path='/'>
            <Login />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

import './App.css';
import Container from 'react-bootstrap/Container';
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import ProvideAuth from '../services/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from '../services/routes';

function App() {

  const isLogged = false;

  return (
    <Router>
      <Container className="App d-flex flex-column h-100" fluid>
        <Switch>
          {routes.map((route, i) => (
              <Route key={i} path={route.path} >
                <route.component />     
              </Route>
            ))
          }
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

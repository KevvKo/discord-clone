import './App.css';
import Container from 'react-bootstrap/Container';
import Index from '../routes/index/Index'
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import useAuth from '../hooks/useAuthentification';
import PrivateRoute from '../routers/privateRoute'
import ProvideAuth from '../providers/provideAuthentification'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <ProvideAuth>
      <Router>
        <Container className="App d-flex flex-column h-100" fluid>
          <Switch>
            {/* {routes.map((route, i) => (
                <Route key={i} path={route.path} >
                  <route.component />     
                </Route>
              ))
            } */} 

            <Route exact path='/'>
              <Index />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>
          </Switch>
        </Container>
      </Router>
    </ProvideAuth>
  );
}

export default App;

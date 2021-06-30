import './App.css';
import Container from 'react-bootstrap/Container';
import Index from '../pages/index/Index'
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register'
import PrivateRoute from '../routers/privateRoute'
import ProvideAuth from '../providers/provideAuthentification'
import {
  HashRouter as Router,
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
            <Route path='/register'>
              <Register />
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

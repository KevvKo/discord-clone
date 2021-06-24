import './App.css';
import Container from 'react-bootstrap/Container';
import Index from '../routes/index/Index'
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import {useAuth} from '../hooks/useAuthentification';
import PrivateRoute from '../routers/privateRoute'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";


function App() {

  let history = useHistory();
  let authentification = useAuth();

  // authentification.user 
  // ? history.push('/home')
  // : history.push('/login');

  return (
    <Router>
      <Container className="App d-flex flex-column h-100" fluid>
        <Switch>
          {/* {routes.map((route, i) => (
              <Route key={i} path={route.path} >
                <route.component />     
              </Route>
            ))
          } */} 

          <Route path='/'>
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
  );
}

export default App;

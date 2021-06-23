import Home from '../routes/home/Home'
import Login from '../routes/login/Login'
import Register from '../routes/register/Register'

const routes = [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      component: Login,
      exact: true
    },
    {
      path: '/register',
      component: Register
    }
  ];

export default routes;
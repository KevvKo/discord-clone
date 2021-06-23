import Index from '../routes/index/Index';
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import Register from '../routes/register/Register';

const routes = [
    {
      path: '/',
      component: Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register
    }
  ];

export default routes;
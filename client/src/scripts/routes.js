import Index from '../routes/index/Index';
import Home from '../routes/home/Home';
import Login from '../routes/login/Login';
import Registration from '../routes/registration/Registration';

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
        path: '/registration',
        component: Registration
    }
];

export default routes;
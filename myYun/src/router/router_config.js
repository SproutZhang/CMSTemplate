import Login from '../login';
import Home from '../components/index';

const routers = [
    {
        path:"/",
        component: Login,
        exact: true
    },
    {
        path:"/home",
        component: Home,
    }
];

export default routers;
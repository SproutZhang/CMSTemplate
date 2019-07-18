import Charts from '../charts/index';
import User from '../users/index';
import Goods from '../goods/index';
import First from '../goodsCategory/first';
import Second from '../goodsCategory/second';
import Query from '../order/query';
import Dispatch from '../order/dispatch';
import Refund from '../order/refund';


const MenuRouters = [
    {
        path:'/charts',
        component: Charts
    },
    {
        path:'/user',
        component: User
    },
    {
        path:'/goods',
        component: Goods
    },
    {
        path:'/category/first',
        component: First
    },
    {
        path:'/category/second',
        component: Second
    },
    {
        path:'/orders',
        component: Query
    },
    {
        path:'/order/dispatch',
        component: Dispatch
    },
    {
        path:'/order/refund',
        component: Refund
    },
]

export default MenuRouters;
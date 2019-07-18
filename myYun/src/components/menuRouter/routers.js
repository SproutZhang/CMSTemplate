import Charts from '../content/charts/index';
import User from '../content/users/index';
import Goods from '../content/goods/index';
import First from '../content/goodsCategory/first';
import Second from '../content/goodsCategory/second';
import Query from '../content/order/query';
import Dispatch from '../content/order/dispatch';
import Refund from '../content/order/refund';


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
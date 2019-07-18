
const Menus = [
    {
        key: 1,
        icon:'pie-chart',
        menuName: '主页',
        path: '/charts'
    },
    {
        key: 2,
        icon:'user',
        menuName: '用户信息管理',
        path:'/user'
    },
    {
        key: 3,
        icon:'desktop',
        menuName: '商品信息管理',
        path:'/goods'
    },
    {
        key: 'sub1',
        icon:'appstore',
        menuName: '商品分类管理',
        children: [
            {
                key:4,
                menuName:'一级分类',
                path:'/category/first'
            },
            {
                key:5,
                menuName:'二级分类',
                path:'/category/second'
            }
        ]
    },
    {
        key: 'sub2',
        icon:'transaction',
        menuName: '订单管理',
        children: [
            {
                key:6,
                menuName:'订单查询',
                path:'/orders'
            },
            {
                key:7,
                menuName:'订单配送',
                path:'/order/dispatch'
            },
            {
                key:8,
                menuName:'退款管理',
                path:'/order/refund'
            }
        ]
    },
];

export default Menus;
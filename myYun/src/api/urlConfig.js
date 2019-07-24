const apiUrl = {
    //用户
    user: {
        loginUrl: '/login',
        cookieUrl: '/get',
        userUrl: '/users/get',
        userEdit: '/users/edit',
        userDel: '/users/del',
    },
    //商品
    goods: {
        getGoodsUrl:'/goods/get',
        addGoodsUrl:'/goods/add',
        editGoodsUrl:'/goods/edit',
        delGoodsUrl:'/goods/del',
        //分类
        category: {
            //一级分类
            first:{
                fAddUrl:'/GoodsCategory/first/add',
                fGetUrl: '/GoodsCategory/first/get',
                fEditUrl: '/GoodsCategory/first/edit',
                fDelUrl: '/GoodsCategory/first/del',
            },
            second: {
                sAddUrl: '/GoodsCategory/second/add',
                sGetUrl:'/GoodsCategory/second/get',
                sEditUrl:'/GoodsCategory/second/edit',
                sDelUrl:'/GoodsCategory/second/del'
            }
        }
    },
    orders: {
        allOrders: '/order/all',
        deliveryOrders: '/order/delivery',
        sendOrder: '/order/delivery/send',
        refundOrders: '/order/refund',
        agreeOrder: '/order/refund/agree',
        refuseOrder: '/order/refund/refuse'
    }

}

export default apiUrl;
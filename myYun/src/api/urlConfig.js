const apiUrl = {
    //用户
    user: {
        loginUrl: '/login',
        cookieUrl: '/get',
        userUrl: '/getUsers'
    },
    //商品
    goods: {
        //分类
        category: {
            //一级分类
            first:{
                fAddUrl:'/GoodsCategory/first/add',
                fGetUrl: '/GoodsCategory/first/get'
            },
            second: {
                sAddUrl: '/GoodsCategory/second/add',
                sGetUrl:'/GoodsCategory/second/get'
            }
        }
    }

}

export default apiUrl;
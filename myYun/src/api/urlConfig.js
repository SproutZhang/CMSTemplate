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
                addUrl:'/GoodsCategory/first/add',
                getUrl: '/GoodsCategory/first/get'
            }
        }
    }

}

export default apiUrl;
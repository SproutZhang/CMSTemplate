const apiUrl = {
    //用户
    user: {
        login: '/login'
    },
    //商品
    goods: {
        //分类
        category: {
            //一级分类
            first:{
                add:'/GoodsCategory/first/add',
                get: '/GoodsCategory/first/get'
            }
        }
    }

}

export default apiUrl;
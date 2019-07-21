const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.static('./img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
* 用户操作
*
*
* */

//登录
app.use('/login',require('./router/user/user_login'));

//获取cookie
app.use('/get',require('./router/user/getCookie'));

//获取用户信息
app.use('/getUsers',require('./router/user/user_info'));


/*
* 商品操作
*
* */
//一级商品分类
app.use('/GoodsCategory/first',require('./router/goods/category/first'));



/*
* 订单操作
*
* */

app.listen(80)
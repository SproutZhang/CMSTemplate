const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const multer = require('multer');


app.use(express.static('./img'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer({dest: './pic'}).array('image'));


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
app.use('/users',require('./router/user/user_info'));


/*
* 商品操作
*
* */
//商品信息
app.use('/goods',require('./router/goods/index'));
//一级商品分类
app.use('/GoodsCategory/first',require('./router/goods/category/first'));
//二级商品分类
app.use('/GoodsCategory/second',require('./router/goods/category/second'));



/*
* 订单操作
*
* */
app.use('/order',require('./router/order/index'))

/*
* 上传
* */

app.use('/upload',require('./router/tools/upload'))

app.listen(80)
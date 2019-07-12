const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cookieParser = require('cookie-parser')

let sql = {
     users: [
         {
             id: 0,
             name: 'admin',
             psw: '123',
             age: 12,
             avatar: 'http://localhost/cat.png'
         }
     ],
     usersInfo:{
        columns:[
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
              {
                title: '电话',
                dataIndex: 'tel',
                key: 'tel',
              }
        ],
        data:[
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '3',
                name: '胡彦1',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '4',
                name: '胡彦2',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
        ]
     }
  
}

app.use(express.static('./img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
* 用户操作
*
*
* */

//登录
app.post('/login',(req,res) =>{
    let obj = {};
    let {user,psw} = req.body;

    if(!(user&&psw)){
        obj.code = 1;
        obj.msg = "请填写正确的用户名密码"
    }
    let o = sql.users.find(item=>item.name === user);
    if(o){
        let userinfo = {
            name: o.name,
            avatar: o.avatar
        }
        if(o.psw == psw){
            obj.code = 0;
            obj.msg = "登陆成功";
            obj.data = userinfo;
        }else{
            obj.code = 1;
            obj.msg = "用户名或密码错误";
        }

    }else{
        obj.code = 1;
        obj.msg = "用户不存在";
    }

    if(obj.code === 0){
        //给浏览器设置cookie
        res.cookie('username',obj.data.name,{maxAge: 360000})
        res.cookie('avatar',obj.data.avatar,{maxAge: 360000})
    }
    res.json(obj)
    
})

//获取cookie
app.use('/get',(req,res)=>{
    let cookie = req.cookies.username;
    let obj = {};
    if(!cookie){
        res.json({code:2,msg:'未登录'})
    }else{
        obj.code = 0;
        obj.msg = "登陆成功";
        let us = sql.users.find(item=> item.name === cookie);
        let userinfo = {
            name: us.name,
            avatar: us.avatar
        }
        obj.data = userinfo;
        res.json(obj)
    }
})

//获取用户信息
app.get('/getUsers',(req,res)=>{
    res.json({code:0,msg: sql.usersInfo })
})



app.listen(80)
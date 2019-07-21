const express = require('express');
const router = express.Router();
const sql = require('../../data/index')


//登录
router.post('/',(req,res) =>{
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
        res.cookie('username',obj.data.name,{maxAge: 3600000})
        res.cookie('avatar',obj.data.avatar,{maxAge: 3600000})
    }
    res.json(obj)

})

module.exports = router;
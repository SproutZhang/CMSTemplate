const express = require('express');
const router = express.Router();
const sql = require('../../data/index');

router.use('/',(req,res)=>{
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

module.exports = router;


const express = require('express');
const router = express.Router();
const sql = require('../../../data/index');

//添加二级商品
router.get('/add',(req,res) =>{
    let { cname,imgUrl,pid,pname } = req.query;
    if(cname&&imgUrl&&pid&&pname){
        sql.goodsCategory.second.data.unshift({
            id: Date.now(),
            cname,
            pid,
            pname,
            imgUrl
        })
        res.json({code:0,msg: '添加成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

//获取一级商品
router.get('/get',(req,res) =>{
    res.json({code:0,msg: sql.goodsCategory.second })
})

module.exports = router;
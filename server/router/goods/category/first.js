const express = require('express');
const router = express.Router();
const sql = require('../../../data/index');

//添加一级商品
router.get('/add',(req,res) =>{
    let { cname } = req.query;
    if(cname){
        sql.goodsCategory.first.data.unshift({
            id: Date.now(),
            cname
        })
        res.json({code:0,msg: '添加成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

//获取一级商品
router.get('/get',(req,res) =>{
    res.json({code:0,msg: sql.goodsCategory.first })
})

module.exports = router;
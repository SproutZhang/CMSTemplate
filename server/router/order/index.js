const express = require('express');
const router = express.Router();
const sql = require('../../data/index');

//全部订单
router.get('/all',(req,res)=>{
    res.json({code:0,msg: sql.orderInfo })
})

//订单配送
router.get('/delivery',(req,res)=>{
    let { status } = req.query;
    if(status){
        let data = sql.orderInfo.data;
        let dataList = data.filter(item => item.status == status);
        res.json({code:0,msg: {columns:sql.orderInfo.columns,data:dataList} })
    }else{
        res.json({code:1,msg: '参数错误' })
    }

})

//退款订单
router.get('/refund',(req,res)=>{
    let data = sql.orderInfo.data;
    let dataList = data.filter(item => item.status == 3);
    res.json({code:0,msg: {columns:sql.orderInfo.columns,data:dataList} })
})

module.exports = router;
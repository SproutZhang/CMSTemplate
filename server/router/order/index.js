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
    let data = sql.orderInfo.data;
    if(status == 0){
        let dataList = data.filter(item => item.status == status);
        res.json({code:0,msg: {columns:sql.orderInfo.columns,data:dataList} })
    }else if(status == 1){
        let dataList = data.filter(item => item.status === 1||item.status ===2);
        res.json({code:0,msg: {columns:sql.orderInfo.columns,data:dataList} })
    }else{
        res.json({code:1,msg: '参数错误' })
    }

})
//发货
router.get('/delivery/send',(req,res)=>{
    let id = req.query.id;
    let data = sql.orderInfo.data;
    if(id){
        data.forEach(item =>{
            if(item.id === id){
                item.status = 1;
            }
        })
        res.json({code:0,msg:'操作成功' })
        // res.json({code:0,msg:sql.orderInfo.data })

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
//同意退款
router.get('/refund/agree',(req,res)=>{
    let id = req.query.id;
    let data = sql.orderInfo.data;
    if(id){
        data.forEach(item =>{
            if(item.id === id){
                item.status = 4;
            }
        })
        res.json({code:0,msg:'操作成功' })
        // res.json({code:0,msg:sql.orderInfo.data })

    }else{
        res.json({code:1,msg: '参数错误' })
    }

})
//拒绝退款
router.get('/refund/refuse',(req,res)=>{
    let id = req.query.id;
    let data = sql.orderInfo.data;
    if(id){
        data.forEach(item =>{
            if(item.id === id){
                item.status = 5;
            }
        })
        res.json({code:0,msg: '操作成功' })
        // res.json({code:0,msg:sql.orderInfo.data })

    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

module.exports = router;
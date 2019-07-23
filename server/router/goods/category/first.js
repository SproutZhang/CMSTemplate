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
    let { id } = req.query;
    let data = sql.goodsCategory.first.data;
    if(id){
        let fdata = data.filter(item=> item.id == id)
        res.json({code:0,data: fdata })
    }else{
        res.json({code:0,msg: sql.goodsCategory.first })
    }

})
//修改名称
router.get('/edit',(req,res) =>{
    let { id,cname } = req.query;
    let data = sql.goodsCategory.first.data;
    if(id&&cname){
        data.forEach(item =>{
            if(item.id == id){
                item.cname = cname;
            }
        })
        res.json({code:0,msg:'修改成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})
//删除
router.get('/del',(req,res) =>{
    let { id } = req.query;
    let data = sql.goodsCategory.first.data;
    if(id){
        let index = data.findIndex(item =>(
            item.id == id
        ))
        data.splice(index,1)
        res.json({code:0,msg:'删除成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

module.exports = router;
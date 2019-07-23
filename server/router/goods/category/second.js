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
//修改二级商品
router.get('/edit',(req,res) =>{
    let {
        id,
        cname,
        pid,
        pname,
        imgUrl
    } = req.query;
    let data = sql.goodsCategory.second.data;
    if(id&&cname&&pid&&pname&&imgUrl){
        data.forEach(item =>{
            if(item.id == id){
                item.cname = cname;
                item.pid = pid;
                item.pname = pname;
                item.imgUrl = imgUrl;
            }
        })
        res.json({code:0,msg:'修改成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

//获取二级商品
router.get('/get',(req,res) =>{
    let { id } = req.query;
    let data = sql.goodsCategory.second.data;
    if(id){
        let fdata = data.filter(item=> item.id == id)
        res.json({code:0,data: fdata })
    }else{
        res.json({code:0,msg: sql.goodsCategory.second })
    }
})

//删除
router.get('/del',(req,res) =>{
    let { id } = req.query;
    let data = sql.goodsCategory.second.data;
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
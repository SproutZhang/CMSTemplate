const express = require('express');
const router = express.Router();
const sql = require('../../data/index');

const data = sql.goods;
///添加商品
router.get('/add',(req,res) =>{
    let { gname, imgUrl, pid, pname, nowPrice, oldPrice, specs, origin } = req.query;
    if(gname&&imgUrl&&pid&&pname&&nowPrice&&specs&&origin){
        data.unshift({
            id: Date.now(),
            gname,
            pid,
            pname,
            imgUrl,
            nowPrice,
            oldPrice,
            specs,
            origin
        })
        res.json({code:0,msg: '添加成功' })
    }else{
        res.json({code:1,msg: '参数错误' })
    }
})

//获取商品
router.get('/get',(req,res) =>{
    let { id } = req.query;
    if(id){
        let fdata = data.filter(item=> item.id == id)
        res.json({code:0,data: fdata })
    }else{
        res.json({code:0,msg: data})
    }

})
//修改
router.get('/edit',(req,res) =>{
    let { id, gname, imgUrl, pid, pname, nowPrice, oldPrice, specs, origin } = req.query;
    if(id&&gname&&imgUrl&&pid&&pname&&nowPrice&&specs&&origin){
        data.forEach(item =>{
            if(item.id == id){
                item.gname = gname;
                item.imgUrl = imgUrl;
                item.pid = pid;
                item.pname = pname;
                item.nowPrice = nowPrice;
                item.oldPrice = oldPrice;
                item.specs = specs;
                item.origin = origin;
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
const express = require('express');
const router = express.Router();
const sql = require('../../data/index');

//获取用户信息
router.get('/get',(req,res)=>{
    let { id } = req.query;
    let data = sql.usersInfo.data;
    if(id){
        let fdata = data.filter(item=> item.id == id)
        res.json({code:0,data: fdata })
    }else{
        res.json({code:0,msg: sql.usersInfo })
    }
})
//修改用户信息
router.get('/edit',(req,res) =>{
    let {
        id,
        name,
        age,
        address,
        tel
    } = req.query;
    let data = sql.usersInfo.data;
    if(id&&name&&age&&address&&tel){
        data.forEach(item =>{
            if(item.id == id){
                item.name = name;
                item.age = age;
                item.address = address;
                item.tel = tel;
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
    let data = sql.usersInfo.data;
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
const express = require('express');
const router = express.Router();
const sql = require('../../data/index');

router.get('/',(req,res)=>{
    res.json({code:0,msg: sql.usersInfo })
})

module.exports = router;
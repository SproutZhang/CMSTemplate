/*上传图片*/

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dirpath = path.resolve(__dirname,'../../')

router.post('/',(req,res)=>{
    //写入的路径
    let imgPath = dirpath + '/img/' + req.files[0].originalname;
    fs.readFile(req.files[0].path,(error,data)=>{
        if(error){
            res.json({code:1,msg:'上传失败'})
        }else{
            let f = fs.writeFileSync(imgPath,data);
            let imgUrl = 'http://localhost/'+req.files[0].originalname;
            res.json({code:0,msg:'上传成功',path: imgUrl})
        }
    })
})


module.exports = router;




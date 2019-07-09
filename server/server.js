const express = require('express');
const bodyParser = require('body-parser')
const app = express();

let sql = {
     users: [
         {
             id: 0,
             name: 'admin',
             psw: '123',
             age: 12,
             avatar: 'http://localhost/cat.png'
         }
     ],
     usersInfo:{
        columns:[
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              },
              {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              },
              {
                title: '电话',
                dataIndex: 'tel',
                key: 'tel',
              }
        ],
        data:[
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '3',
                name: '胡彦1',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
              {
                key: '4',
                name: '胡彦2',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
              },
        ]
     }
  
}
app.use(express.static('./img'))
app.use(bodyParser.urlencoded({ extended: false }));
//登录post
app.post('/login',(req,res) =>{
    let obj = req.body;
    if(!(obj.user&&obj.psw)){
        res.json({code:1,msg:'请填写正确的用户名密码'});
        return false;
    }
    let o = sql.users.find(item=>item.name === obj.user);
    if(o){
        let userinfo = {
            name: 'admin',
            avatar: 'http://localhost/cat.png'
        }
        o.psw===obj.psw?res.json({code:0,msg:'登录成功',data:userinfo}):res.json({code:1,msg:'用户名或密码错误'})
    }else{
        res.json({code:1,msg:'暂无此用户'})
    }
    
})

//获取用户信息
app.get('/getUsers',(req,res)=>{
    res.json({code:0,msg: sql.usersInfo })
})



app.listen(80)
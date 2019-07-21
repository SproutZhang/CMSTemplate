const sql = {
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
    },
    goods:[

    ],
    goodsCategory:{
        first:{
            columns:[
                {
                    title: 'id',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '分类名称',
                    dataIndex: 'cname',
                    key: 'cname',
                }
            ],
            data:[]
        },
        Second:[

        ]
    }


}

module.exports = sql;
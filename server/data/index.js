/*
*  订单状态： 0未发货 1运输中 2已送达 3退款中 4已退款 5退款失败
*
* */

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
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
            },
            {
                title: '电话',
                dataIndex: 'tel',
            }
        ],
        data:[
            {
                id: '10001',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
            },
            {
                id: '10002',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
            },
            {
                id: '10003',
                name: '胡彦1',
                age: 42,
                address: '西湖区湖底公园1号',
                tel: '18210000000',
            },
            {
                id: '10004',
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
                },
                {
                    title: '分类名称',
                    dataIndex: 'cname',
                }
            ],
            data:[]
        },
        second:{
            columns:[
                {
                    title: 'id',
                    dataIndex: 'id',
                },
                {
                    title: '所属一级名称',
                    dataIndex: 'pname',
                },
                {
                    title: '分类名称',
                    dataIndex: 'cname',
                },
                {
                    title: '图片',
                    dataIndex: 'imgUrl',
                }
            ],
            data:[]
        }
    },
    orderInfo:{
        columns:[
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户id',
                dataIndex: 'uid',
            },
            {
                title: '总价',
                dataIndex: 'totalP',
            },
            {
                title: '订单状态',
                dataIndex: 'status',
            },
            {
                title: '下单时间',
                dataIndex: 'orderTime',
            },
            {
                title: '备注',
                dataIndex: 'remarks',
            }
        ],
        data:[
            {
                id: '10000072',
                uid: '10001',
                totalP: 531.2,
                status: 0,
                orderTime: '2019-07-22 10:04',
                remarks:''
            },
            {
                id: '10000073',
                uid: '10002',
                totalP: 109,
                status: 0,
                orderTime: '2019-07-22 11:24',
                remarks:'请尽快送达'
            },
            {
                id: '10000074',
                uid: '10003',
                totalP: 40.62,
                status: 1,
                orderTime: '2019-07-22 11:24',
                remarks:'请尽快送达'
            },
            {
                id: '10000075',
                uid: '10004',
                totalP: 109,
                status: 0,
                orderTime: '2019-07-22 11:52',
                remarks:''
            },
            {
                id: '10000076',
                uid: '10005',
                totalP: 35.3,
                status: 2,
                orderTime: '2019-07-22 12:24',
                remarks:''
            },
            {
                id: '10000077',
                uid: '10006',
                totalP: 342,
                status: 3,
                orderTime: '2019-07-22 13:22',
                remarks:''
            }
        ]

    }



}

module.exports = sql;
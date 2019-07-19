import React, { Component } from 'react';
import Cards from './card/index';
import { Layout,Row,Col } from 'antd';
import CollectCharts from './orderCharts/collect'
import OrderCharts from './orderCharts/order'
import './card.css'
const { Content } = Layout;


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:[
                {
                    title:'总销售额',
                    val: 3207,
                    unit: '￥',
                    dec:'今日销售额',
                    decNum: '74500'
                },
                {
                    title:'待发货',
                    val: 10,
                    unit: '',
                    dec:'今日新增',
                    decNum: '3'
                },
                {
                    title:'购物车收藏数',
                    val: 10,
                    unit: '',
                    dec:'用户数量',
                    decNum: '8'
                },
                {
                    title:'成交笔数',
                    val: 36,
                    unit: '',
                    dec:'今日新增',
                    decNum: '5'
                }
            ]
        }
    }

    render() {
        let { cards } = this.state;
        let card = null;
        if(cards.length>0){
            card = cards.map((item,i)=>{
                return (
                    <Cards {...{
                        key: i,
                        title: item.title,
                        val: item.val,
                        unit: item.unit,
                        dec: item.dec,
                        decNum: item.decNum,
                    }} />
                )

            })
        }
        console.log(card);

        return (
            <Content style={{ margin: '0 16px' }}>

                <div style={{ padding: 24, minHeight: 360 , height: '100vh'}}>

                    <Row gutter={16}>
                        { card }
                    </Row>

                    <Row gutter={24} style={{marginTop: '30px'}}>
                        <Col span={12} style={{bakcground: '#fff'}}>
                            <OrderCharts />
                        </Col>
                        <Col span={12}>
                            <CollectCharts />
                        </Col>
                    </Row>
                </div>
            </Content>

         );
    }
}
 
export default Charts;


import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';


class CollectCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getOption = () => {

        return {
            title : {
                text: '客户收藏转化率',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['收藏购物车','已完成订单']
            },
            series : [
                {
                    name: '统计情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value: 30, name:'收藏购物车'},
                        {value: 20, name:'已完成订单'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    render() {

        return (
            <ReactEcharts
                option={this.getOption()}
                style={{
                    height: 300,
                    backgroundColor: '#fff',
                    padding: '24px'
                }}
            />


        );
    }
}

export default CollectCharts;


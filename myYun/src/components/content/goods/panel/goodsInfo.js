/* 商品详情列表 */
import React, { Component } from 'react';
import {Card, Icon, Col,  Popconfirm} from 'antd';
import { connect } from "react-redux";
import * as actions from '../../../../store/actions/goods/index';
import { mapGoods } from "../../../../store/setMapStateProps";


class GoodsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //删除
    confirm = (id)=>{
        this.props.delGoods('?id='+id)
    }
    render() {
        const {data, showModal} = this.props;
        const {
            gname,
            id,
            imgUrl,
            nowPrice,
            oldPrice,
            origin,
            pname,
            specs
        } = data;
        return (
            <Col span={8}>
                <Card
                    className='add-goods'
                    cover={
                        <img
                            alt="example"
                            style={{height:280}}
                            src={imgUrl}
                        />
                    }
                    actions={[
                        <Icon
                            type="edit"
                            onClick={showModal.bind(this,id)}
                        />,
                        <Popconfirm
                            title="删除后数据不可恢复，确认删除吗?"
                            onConfirm={this.confirm.bind(this,id)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Icon type="delete" />
                        </Popconfirm>

                    ]}
                >
                    <div className="cards-info">
                        <h4>{gname}</h4>
                        <ul>
                            <li>商品id: {id}</li>
                            <li>分类：{pname}</li>
                            <li className='red'>现价：{nowPrice}</li>
                            <li>原价：{oldPrice}</li>
                            <li>规格：{specs}</li>
                            <li>原产地：{origin}</li>
                        </ul>

                    </div>

                </Card>
            </Col>
        );
    }
}

export default connect(mapGoods,actions)(GoodsCard);
/* 添加商品 */

import React, { Component } from 'react';
import { Button, Col } from 'antd';



class AddGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { showModal } = this.props;
        return (
            <Col span={8}>
                <Button
                    type="dashed"
                    className="add-goods"
                    onClick={showModal}
                >+ 添加商品</Button>
            </Col>

        );
    }
}

export default AddGoods;


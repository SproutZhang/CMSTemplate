/* 添加商品 */

import React, { Component } from 'react';
import { Button } from 'antd';



class AddGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { showModal } = this.props;
        return (
            <Button
                type="dashed"
                className="add-goods"
                onClick={showModal}
            >+ 添加商品</Button>
        );
    }
}

export default AddGoods;


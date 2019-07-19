import React, { Component } from 'react';
import { Card , Col} from 'antd';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {title,val,unit,dec,decNum} = this.props;
        return (
            <Col span={6}>
                <Card hoverable className="cardBox">
                    <div >
                        <h4>
                            {title}
                        </h4>
                        <h2>
                            {unit}{val}
                        </h2>
                        <hr />
                        <div >
                            {dec}: &nbsp;&nbsp;{unit}{decNum}
                        </div>
                    </div>
                </Card>
            </Col>


        );
    }
}

export default Cards;


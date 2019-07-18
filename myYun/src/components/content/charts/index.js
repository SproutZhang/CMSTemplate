import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'
import { Layout } from 'antd';
const { Content } = Layout;


class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Content style={{ margin: '0 16px' }}>

                <div style={{ padding: 24, minHeight: 360 , height: '100vh'}}>
                    <div>charts</div>
                </div>
            </Content>

         );
    }
}
 
export default Charts;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'


class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>订单查询</div>
        );
    }
}

export default Query;


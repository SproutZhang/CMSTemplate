import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'


class Refund extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>退款处理</div>
        );
    }
}

export default Refund;


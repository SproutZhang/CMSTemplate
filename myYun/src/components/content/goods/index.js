import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'


class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>Goods</div>
        );
    }
}

export default Goods;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { mapUser } from '../../../store/setMapStateProps'


class First extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>一级分类</div>
        );
    }
}

export default First;


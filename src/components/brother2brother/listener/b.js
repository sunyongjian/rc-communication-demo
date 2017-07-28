import React, { Component } from 'react';
import { event } from './eventEmitter';

export default class B extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    event.on('dispatch', this.valueChange);
  }

  componentWillUnmount() {
    event.off('dispatch', this.valueChange);
  }

  valueChange = value => {
    this.setState({
      value,
    })
  }

  render() {
    return (
      <div className="card">
        我是Brother B, value是：
        {this.state.value}
      </div>
    );
  }
}

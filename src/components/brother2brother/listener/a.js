import React, { Component } from 'react';
import { event } from './eventEmitter';

export default class A extends Component {

  handleChange = (e) => {
    this.value = e.target.value;
  }

  handleClick = () => {
    event.emit('dispatch', this.value);
  }

  render() {
    return (
      <div className="card">
        我是Brother A, <input onChange={this.handleChange} />
        <div className="button" onClick={this.handleClick}>通知</div>
      </div>
    )
  }
}

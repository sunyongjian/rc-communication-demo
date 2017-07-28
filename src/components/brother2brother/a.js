import React, { Component } from 'react';

export default class A extends Component {

  handleChange = (e) => {
    this.value = e.target.value;
  }

  handleClick = () => {
    const { setValue } = this.props;
    setValue(this.value);
  }

  render() {
    return (
      <div>
        我是Brother A, <input onChange={this.handleChange} />
        <div style={{ cursor: 'pointer' }} onClick={this.handleClick}>通知</div>
      </div>
    )
  }
}

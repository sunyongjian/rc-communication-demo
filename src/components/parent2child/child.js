import React, { Component } from 'react';

export default class Child extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        我是Child，得到传下来的值：{value}
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class B extends Component {

  render() {
    return (
      <div>
        我是Brother B, value是：
        {this.props.value}
      </div>
    );
  }
}

import React, { Component } from 'react';
import Child from './child';

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  setValue = (value) => {
    this.setState({
      value,
    })
  }

  render() {
    return (
      <div>
        <div>我是parent, Value是：{this.state.value}</div> 
        <Child setValue={this.setValue} />
      </div>
    );
  }
}

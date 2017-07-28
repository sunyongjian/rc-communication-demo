import React, { Component } from 'react';
import Child from './child';

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.value = e.target.value;
  }

  handleClick = () => {
    this.setState({
      value: this.value,
    })
  }

  render() {
    return (
      <div>
        我是parent
        <input onChange={this.handleChange} />
        <div className="button" onClick={this.handleClick}>通知</div>
        <div>
          <Child value={this.state.value} />
        </div> 
      </div>
    );
  }
}

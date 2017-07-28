import React, { Component } from 'react';

export default class Child extends Component {

  constructor() {
    super();
    this.state = {
      childValue: ''
    }
  }

  childValChange = e => {
    this.childVal = e.target.value;
  }

  childValDispatch = () => {
    const { onChange } = this.props;
    this.setState({
      childValue: this.childVal,
    }, () => { onChange(this.state.childValue) })
  }

  handleChange = e => {
    this.value = e.target.value;
  }

  handleClick = () => {
    const { setValue } = this.props;
    setValue(this.value);
  }

  render() {
    return (
      <div>
        我是Child
        <div className="card">
          state 定义在 parent
          <input onChange={this.handleChange} />
          <div className="button" onClick={this.handleClick}>通知</div>
        </div>
        <div className="card">
          state 定义在 child
          <input onChange={this.childValChange} />
          <div className="button" onClick={this.childValDispatch}>通知</div>
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';


export default class A extends Component {

  handleChange = (e) => {
    this.value = e.target.value;
  }

  handleClick = () => {
    const { setValue } = this.context;
    setValue(this.value);
  }

  render() {
    return (
      <div>
        我是parentA 下的 A, <input onChange={this.handleChange} />
        <div className="button" onClick={this.handleClick}>通知</div>
      </div>
    );
  }
}
// 必需
A.contextTypes = {
  setValue: PropTypes.func,
};

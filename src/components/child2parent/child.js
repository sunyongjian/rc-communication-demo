import React, { Component } from 'react';

export default class Child extends Component {

  handleChange = (e) => {
    this.value = e.target.value;
  }

  handleClick = () => {
    const { setValue } = this.props;
    setValue(this.value);
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        我是Child<input onChange={this.handleChange} />
        <div className="button" onClick={this.handleClick}>通知</div>
      </div>
    );
  }
}

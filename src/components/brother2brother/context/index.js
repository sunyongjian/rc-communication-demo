import React, { Component, PropTypes } from 'react';
import AParent from './a_parent';
import BParent from './b_parent';

export default class Context extends Component {

  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  setValue = value => {
    this.setState({
      value,
    })
  }

  getChildContext() { // 必需
    return { 
      value: this.state.value,
      setValue: this.setValue,
    };
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <AParent />
        <BParent />
      </div>
    );
  }
}
// 必需
Context.childContextTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

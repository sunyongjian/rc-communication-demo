import React, { Component, PropTypes } from 'react';


export default class B extends Component {

  render() {
    return (
      <div>
        我是parentB 下的 B, value是：
        {this.context.value}
      </div>
    );
  }
}

B.contextTypes = {
  value: PropTypes.string,
};

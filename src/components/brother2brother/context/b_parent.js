import React, { Component } from 'react';
import B from  './b';

export default class BParent extends Component {
  render() {
    return (
      <div className="card">
        <B />
      </div>
    );
  }
}

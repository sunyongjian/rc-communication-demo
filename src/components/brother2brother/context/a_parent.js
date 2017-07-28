import React, { Component } from 'react';
import A from  './a';

export default class AParent extends Component {
  render() {
    return (
      <div className="card">
        <A />
      </div>
    );
  }
}

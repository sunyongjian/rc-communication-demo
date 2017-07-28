import React, { Component } from 'react';

const B = props => (
  <div className="card">
    我是Brother B, value是：
    {props.value}
  </div>
);

export default B;

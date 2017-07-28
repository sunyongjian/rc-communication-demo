import React, { Component } from 'react';
import A from './a';
import B from './b';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  setValue = value => {
    this.setState({
      value,
    })
  }

  render() {
    return (
      <div>
        <A setValue={this.setValue}/>
        <B value={this.state.value} />
      </div>
    );
  }
}

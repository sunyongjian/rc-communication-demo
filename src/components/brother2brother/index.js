import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Container from './container';
import Context from './context';

export default class Bros extends Component {

  render() {
    // 获取当前 router 的 path
    const { match: { url } } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/container`}>
              container
            </Link>
          </li>
          <li>
            <Link to={`${url}/context`} >
              context
            </Link>
          </li>
        </ul>
        <Route path={`${url}/container`} component={Container} />
        <Route path={`${url}/context`} component={Context} />
      </div>
    );
  }
}

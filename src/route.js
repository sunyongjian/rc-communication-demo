import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Parent as Parent2Child } from './components/parent2child/parent';
import { Parent as Child2Parent } from './components/child2parent/parent';
import Bros from './components/brother2brother';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">parent2child</Link></li>
        <li><Link to="/c2p">child2parent</Link></li>
        <li><Link to="/bros">bro2bro</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Parent2Child} />
      <Route path="/c2p" component={Child2Parent} />
      <Route path="/bros" component={Bros} />
    </div>
  </Router>
);
export default Routes;

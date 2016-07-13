import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router'


import App from './components/App.jsx';
import DescriptionPage from './components/DescriptionPage.jsx';
import TeamPage from './components/TeamPage.jsx';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}></Route>
    <Route path="/description" component={DescriptionPage}></Route>
    <Route path="/team" component={TeamPage}></Route>
  </Router>,
  document.getElementById('react-container')
)

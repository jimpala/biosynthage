import React from 'react';
import ReactDOM from 'react-dom';

// TODO: move to browserHistory, idk why it keeps failing
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App.jsx';
import DescriptionPage from './components/DescriptionPage.jsx';
import TeamPage from './components/TeamPage.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/description" component={DescriptionPage}/>
    <Route path="/team" component={TeamPage}/>
  </Router>
), document.getElementById('react-container'));

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router'

// Import App.jsx (base jsx file)
import App from './components/App.jsx';

// Import 'page' .jsx files
import LandingPage from './components/LandingPage.jsx';
import DescriptionPage from './components/DescriptionPage.jsx';



/*
Route structure in variable next.
App is the base path ('/'), and will match all children.
LandingPage ('/home') as IndexRoute will be routed to if
no children match
*/

var routes = (
    <Route path="/" component={App}>
        {/*<IndexRoute path="/home" component={LandingPage}/>*/}
        {/*<Route path="/description" component={DescriptionPage}/>*/}
    </Route>
);

// Render ReactDOM with chosen routing; set App.jsx as the base .jsx file.
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-container'));


// ReactDOM.render(
//   <Router>
//     <Route path="/" component={App}></Route>
//     <Route path="/description" component={DescriptionPage}></Route>
//   </Router>,
//   document.getElementById('react-container')
// )

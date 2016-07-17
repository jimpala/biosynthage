import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { hashHistory } from 'react-router';

// Import App.jsx (base jsx file)
import App from './components/App.jsx';

// Import 'page' .jsx files
import LandingPage from './components/landing/LandingPage.jsx';
import DescriptionPage from './components/description/DescriptionPage.jsx';



/*
Route structure in variable next.
App is the base path ('/'), and will match all children.
LandingPage ('/home') as IndexRoute will be routed to if
no children match
*/

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage}/>
            {/*<Route path="/description" component={DescriptionPage}/>*/}
        </Route>
    </Router>,
    document.getElementById('react-container')
);



// ReactDOM.render(
//   <Router>
//     <Route path="/" component={App}></Route>
//     <Route path="/description" component={DescriptionPage}></Route>
//   </Router>,
//   document.getElementById('react-container')
// )

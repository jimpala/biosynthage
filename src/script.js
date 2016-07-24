import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

// Import App.jsx (base jsx file)
import App from './components/App.jsx';
// <<<<<<< HEAD
// import DescriptionPage from './components/DescriptionPage.jsx';
// import TeamPage from './components/TeamPage.jsx';
//
// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     <Route path="/description" component={DescriptionPage}/>
//     <Route path="/team" component={TeamPage}/>
//   </Router>
// ), document.getElementById('react-container'));
// =======

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

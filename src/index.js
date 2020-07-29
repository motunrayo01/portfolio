import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';

import App from './App';
import Users from './Users';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

const routing =(
  <Router>
    <div>
      <div className="header">
      <ul >
        <li> 
          <Link to="/"> Home <br/></Link> 
        </li>
        <li> 
          <Link to="/Projects"> Projects </Link>
        </li>
        
        <li> 
          <Link to="/SocialProfiles"> Social-handles </Link> 
        </li>
        <li> 
          <Link to="/Users"> Users </Link>
        </li>
      </ul>
      </div>
      <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Users/" component={Users}/>
      <Route path="/Projects/" component={Projects}/>
      <Route path="/SocialProfiles/" component={SocialProfiles}/>

      </Switch>
    </div>
  </Router>

)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

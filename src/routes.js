import React from 'react';
import {
  Route, HashRouter, Switch, Redirect,
} from 'react-router-dom';
import Foundation from './components/Foundation';
import Champions from './components/Champions';
import Main from './components/Main';
// import Signup from './components/Signup';
import ScrollToTop from './components/ScrollTop';


export default (props) => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/foundation" component={Foundation} />
        <Route exact path="/champions" component={Champions} />
        {/* <Route exact path="/contact" component={Signup} /> */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);

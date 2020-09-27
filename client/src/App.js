import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import classes from './App.module.scss';

import Header from './components/Header/Header';
import Content from './pages/Content/Content';
import Auth from './pages/Auth/Auth';

function App() {
  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Content} />
      <Redirect to={'/'} />
    </Switch>
  );
  return (
    <div className={classes.wrapper}>
      <Header />
      {routes}
    </div>
  );
}

export default App;

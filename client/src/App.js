import React from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { AuthContext } from './context/auth';

import classes from './App.module.scss';

import Header from './components/Header/Header';
import Content from './pages/Content/Content';
import Auth from './pages/Auth/Auth';
import Details from './pages/Details/Details';

function App() {
  const [user, setUser] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  //login handler
  const setUserLogin = (login) => {
    localStorage.setItem('user', login);
    setUser(login);
    history.push('/');
  };

  //create routes depending on whether the user is logged in
  let routes = (
    <Switch>
      <Route path="/auth" exact component={Auth} />
    </Switch>
  );
  if (user) {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/details/:id" component={Details} />
        <Route path="/" exact component={Content} />
        <Redirect to={'/'} />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser: setUserLogin }}>
      <div className={classes.wrapper}>
        <Header />
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

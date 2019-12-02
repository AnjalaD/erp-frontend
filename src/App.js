import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { guestRoutes } from './routes';


function App() {
  const loggedIn = useSelector(state => state.user.loggedIn);

  const createRoute = (routes) => routes.map(
    (index, route) => (
      <Route path={route.path} component={route.component} />
    )
  );


  return (
    <BrowserRouter>
      <Switch>
        {loggedIn ? null : createRoute(guestRoutes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

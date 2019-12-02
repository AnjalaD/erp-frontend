import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { guestRoutes, adminRoutes, hrRoutes, employeeRoutes } from './routes';
import { ADMIN, HR } from './constants/constants';


function App() {
  const { loggedIn, user } = useSelector(state => state.user);

  const createRoute = (routes) => routes.map(
    (index, route) => (
      <Route path={route.path} component={route.component} key={index} />
    )
  );


  const userRouteSelector = (type) => {
    switch (type) {
      case ADMIN:
        return createRoute(adminRoutes);
      case HR:
        return createRoute(hrRoutes);
      default:
        return createRoute(employeeRoutes);
    }
  }


  return (
    <BrowserRouter>
      <Switch>
        {loggedIn ? userRouteSelector(user.type) : createRoute(guestRoutes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

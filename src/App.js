import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3 } from './constants/constants';


function App() {
  const { loggedIn, userType } = useSelector(state => state.status);

  const createRoute = (routes) => routes.map(
    (route, index) => (
      <Route path={route.path} component={route.component} key={index} exact />
    )
  );

  useEffect(() => {
    const user = window.sessionStorage.getItem('user') || null;
    console.log(JSON.parse(user));
    return () => {

    };
  }, [])


  const userRouteSelector = (type) => {
    switch (type) {
      case ADMIN:
        return createRoute(adminRoutes);
      case LEVEL3:
        return createRoute(levelThreeRoutes);
      case LEVEL2:
        return createRoute(levelTwoRoutes);
      case LEVEL1:
        return createRoute(levelOneRoutes);
      default:
        return createRoute(guestRoutes);
    }
  }


  return (
    <BrowserRouter>
      <Switch>
        {loggedIn ? userRouteSelector(userType) : createRoute(guestRoutes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

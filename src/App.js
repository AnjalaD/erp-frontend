import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3 } from './constants/constants';
import Loading from './views/shared/Loading';
import { login } from './redux/actions';


function App() {
  const { loggedIn, access_level } = useSelector(state => state.status);
  const isLoading = useSelector(state => state.loading.isLoading);

  const dispatch = useDispatch();

  const createRoute = (routes) => routes.map(
    (route, index) => (
      <Route path={route.path} component={route.component} key={index} exact />
    )
  );

  useEffect(() => {
    const user = window.sessionStorage.getItem('user') || null;
    console.log('session user', user)
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [dispatch])


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

  const notLoading = (
    <BrowserRouter>
      <Switch>
        {loggedIn ? userRouteSelector(access_level) : createRoute(guestRoutes)}
        <Redirect from='/' to='/' />
      </Switch>
    </BrowserRouter>
  );

  return isLoading ? <Loading /> : notLoading;
}

export default App;

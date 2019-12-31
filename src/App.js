import React, { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './components/navbar/AppNavbar';
import Footer from './components/footer/footer';
import RouterError from './views/shared/RouterError';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3, DIVIDER } from './constants/constants';
import Loading from './views/shared/Loading';
import { login } from './redux/actions';
import Cookies from 'js-cookie';
import NotificationBar from './components/notification/NotificationBar';


function App() {
  const { loggedIn, access_level } = useSelector(state => state.status);
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);

  const createRoutes = (routes) => routes.map(
    (route, index) => (
      route.root ?
        <Route path={route.path} component={route.component} key={index} exact />
        :
        route.children.map((route, index) => (
          route.root ?
            <Route path={route.path} component={route.component} key={index} exact />
            : null
        ))
    )
  );

  const routes = {
    [ADMIN]: adminRoutes,
    [LEVEL3]: levelThreeRoutes,
    [LEVEL2]: levelTwoRoutes,
    [LEVEL1]: levelOneRoutes,
  }

  useEffect(() => {
    // const user = window.sessionStorage.getItem('user') || null;
    const user = Cookies.get('user') || null;
    console.log('session user', user)
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
    setChecking(false);
  }, [dispatch])

  return (
    <div>
      <Loading />
      {
        checking ?
          null
          :
          <BrowserRouter>
            <AppNavbar loggedIn={loggedIn} routes={routes[access_level] || []} />
            <Switch>
              {loggedIn ? createRoutes(routes[access_level] || []) : createRoutes(guestRoutes)}
              <Route path='/error' component={RouterError} exact />
              <Redirect from='/' to='/error' />
            </Switch>
          </BrowserRouter>
      }
      <NotificationBar />
      <Footer />
    </div>
  );
}

export default App;

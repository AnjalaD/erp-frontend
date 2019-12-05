import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3, DIVIDER } from './constants/constants';
import Loading from './views/shared/Loading';
import { login } from './redux/actions';
import AppNavbar from './components/AppNavbar';
import Cookies from 'js-cookie';
import RouterError from './views/shared/RouterError';


function App() {
  console.log('node_env', process.env);
  const { loggedIn, access_level } = useSelector(state => state.status);

  const dispatch = useDispatch();

  const createRoutes = (routes) => routes.map(
    (route, index) => (
      route === DIVIDER ?
        null
        :
        <Route path={route.path} component={route.component} key={index} exact />
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
  }, [dispatch])

  console.log(routes[access_level]);

  return (
    <div>
      <Loading />
      <BrowserRouter>
        <AppNavbar loggedIn={loggedIn} routes={routes[access_level] || []} />
        <Switch>
          {loggedIn ? createRoutes(routes[access_level] || []) : createRoutes(guestRoutes)}
          <Route path='/error' component={RouterError} exact />
          <Redirect from='/' to='/error' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

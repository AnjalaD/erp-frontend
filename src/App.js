import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3 } from './constants/constants';
import Loading from './views/shared/Loading';
import { login } from './redux/actions';
import CustomDrawer from './views/shared/CustomDrawer';


function App() {
  const { loggedIn, access_level } = useSelector(state => state.status);

  const dispatch = useDispatch();

  const createRoutes = (routes) => routes.map(
    (route, index) => (
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
    const user = window.sessionStorage.getItem('user') || null;
    console.log('session user', user)
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, [dispatch])

  return (
    <div>
      <Loading />
      <BrowserRouter>
        {loggedIn ? <CustomDrawer routes={routes[access_level] || []} /> : null}
        <Switch>
          {loggedIn ? createRoutes(routes[access_level] || []) : createRoutes(guestRoutes)}
          <Redirect from='/' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

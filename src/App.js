import React, { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './components/navbar/AppNavbar';
import Footer from './components/footer/footer';
import RouterError from './views/shared/RouterError';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { guestRoutes, levelOneRoutes, levelTwoRoutes, levelThreeRoutes, adminRoutes } from './routes';
import { ADMIN, LEVEL1, LEVEL2, LEVEL3 } from './constants/constants';
import Loading from './views/shared/Loading';
import { login, org_brand, set_color } from './redux/actions';
import Cookies from 'js-cookie';
import NotificationBar from './components/notification/NotificationBar';
import { ORG_DETAILS } from './constants/api';
import { formatOrgDetails } from './util/helper';


function App() {

  const { loggedIn, access_level } = useSelector(state => state.status);
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [orgDetails, setOrgDetails] = useState([]);

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
    // console.log('session user', user)
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
    const color = Cookies.get('color') || null;
    if (color) {
      dispatch(set_color(color));
    }

    setChecking(false);

    fetch(ORG_DETAILS)
      .then(res => {
        if (res.status === 200) res.json().then(res => {
          setOrgDetails(formatOrgDetails(res));
          dispatch(org_brand(formatOrgDetails(res)['Name'] || 'ERP'))
        });
      })
      .catch(err => console.log(err));
  }, [dispatch])

  return (
    <div>
      <Loading />
      {
        checking ?
          null
          :
          <BrowserRouter>
            <AppNavbar
              loggedIn={loggedIn}
              routes={routes[access_level] || []}
              brand={orgDetails['Name']}
            />
            <Switch>
              {loggedIn ? createRoutes(routes[access_level] || []) : createRoutes(guestRoutes)}
              <Route path='/error' component={RouterError} exact />
              <Redirect from='/' to='/error' />
            </Switch>
          </BrowserRouter>
      }
      <NotificationBar />
      <Footer details={orgDetails} />
    </div>
  );
}

export default App;

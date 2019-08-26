import * as React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import AuthRoute from '@/routes/auth-route';
import Loadable from '@loadable/component';
import PageRoutes from './routes';
import login from '@/routes/login-register';

// 使用 import { lazy } from '@loadable/component';
// lazy()会有警告，跟React.lazy()一样的警告
const App = Loadable(() => import('./App'));
const ErrComp = Loadable(() => import('./views/err-comp'));

const AppComp = () => {
  // 独立在 app 之外的路由
  const aloneComp = [
    ...login
  ];
  const ErrRoute = 
    <AuthRoute 
      key='err404' 
      exact={true} 
      path='/err404' 
      component={ErrComp} 
    />;
  const NoMatchRoute = 
    <AuthRoute 
      key='no-match' 
      component={ErrComp} 
    />;

  const routes = [...PageRoutes, ErrRoute, NoMatchRoute];

  return (
    <Switch>
      {
        aloneComp.map(route => route)
      }
      <AuthRoute 
        path='/' 
        render={() => (
          <App>
            <Switch>
              {routes.map(route => route)}
            </Switch>
          </App>
        )}
      />
    </Switch>
  );
}

export default function Router() {
  return (
    <HashRouter>
      <AppComp />
    </HashRouter>
  );
}

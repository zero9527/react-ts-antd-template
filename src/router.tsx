import * as React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import AuthRoute from '@/routes/auth-route';
import Loadable from '@loadable/component';
import PageRoutes from './routes';

// 使用 import { lazy } from '@loadable/component';
// lazy()会有警告，跟React.lazy()一样的警告
const App = Loadable(() => import('./App'));
const ErrComp = Loadable(() => import('./views/err-comp'));

const AppComp = () => {
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
  );
}

export default function Router() {
  return (
    <HashRouter>
      <AppComp />
    </HashRouter>
  );
}

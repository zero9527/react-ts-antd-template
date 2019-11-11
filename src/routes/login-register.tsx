import * as React from 'react';
import AuthRoute from '@/routes/auth-route';
import Loadable from '@loadable/component';

const Login = Loadable(() => import(/* webpackPrefetch: true */ '@/views/login-register'));

export default [
  <AuthRoute
    key="login" 
    exact={true} 
    path="/login" 
    component={Login} 
  />
];
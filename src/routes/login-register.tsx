import * as React from 'react';
import AuthRoute from '@/routes/auth-route';
import Loadable from '@loadable/component';

export default [
  <AuthRoute
    key="login" 
    exact={true} 
    path="/login" 
    component={Loadable(() => import('@/views/login-register'))} 
  />
];
import AuthRoute from '@/routes/auth-route';
import * as React from 'react';
import Loadable from '@loadable/component';

// home
export default [
  <AuthRoute 
    key="home" 
    exact={true} 
    path="/" 
    component={Loadable(() => import('@/views/home/index'))} 
  />,
  <AuthRoute 
    key="home" 
    exact={true} 
    path="/home" 
    component={Loadable(() => import('@/views/home/index'))} 
  />
]

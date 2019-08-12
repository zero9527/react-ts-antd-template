import AuthRoute from '@/routes/auth-route';
import * as React from 'react';
import Loadable from '@loadable/component';

const List = Loadable(() => import('@/views/list'));

// list
export default [
  <AuthRoute 
    key="list" 
    // exact={true} 
    path="/list" 
    // component={Loadable(() => import('@/views/list'))} 
    render={() => {
      return (
        <List>
          <AuthRoute 
            exact={true} 
            path="/list/detail/:id" 
            component={Loadable(() => import('@/views/list-detail'))} 
          />
        </List>
      )
    }}
  />
]

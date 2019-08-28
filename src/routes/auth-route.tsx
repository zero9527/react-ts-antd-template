import * as React from 'react';
import { ComponentProps } from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import * as Cookies from 'js-cookie';

export interface IAuthRouteProps extends RouteProps {
  key?: string|number,
  path?: string,
  auth?: boolean, // 是否需要权限
  redirectPath?: string, // 重定向后的路由
  render?: any,
  component?: ComponentProps<any>
}

const initialProps = {
  key: 1,
  path: '/login',
  auth: true,
  component: () => <div />
};

/**
 * 权限控制处理路由
 */
const AuthRoute = (props: IAuthRouteProps = initialProps) => {
  const { auth, path, component, render, key, redirectPath } = props;
  if (auth && !Cookies.get('auth')) {
    // console.log('path: ', path);
    return (
      <Route 
        key={key}
        path={path}
        render={() => 
          <Redirect to={{
            pathname: redirectPath || '/login',
            search: '?fromUrl='+path
          }} />
        } 
      />
    )
  }
  return (
    <Route 
      key={key}
      path={path}
      component={component}
      render={render}
    />
  )
}

export default AuthRoute;

import login from './login-register';
import home from './home';

/**
 * 需要登录的路由使用这个组件 '@/routes/auth-route'，代替官方 Route
 */
export default [
  ...login,
  ...home
]

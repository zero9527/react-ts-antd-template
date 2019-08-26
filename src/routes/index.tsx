import home from './home';
import list from './list';

/**
 * 需要登录的路由使用这个组件 '@/routes/auth-route'，代替官方 Route
 */
export default [
  ...home,
  ...list
]

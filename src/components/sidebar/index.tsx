import * as React from 'react';
import styles from './sidebar.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const { useMemo } = React;

interface Props extends RouteComponentProps {
  [prop: string]: any
}

interface SidebarItem {
  label: string,
  link: string,
  subLink: string[]
}

function Sidebar(props: Props) {
  const sideList: SidebarItem[] = [
    { label: '首页', link: '/', subLink: [] },
    { label: '列表', link: '/list', subLink: ['/list/detail/'] },
    { label: '登录', link: '/login', subLink: [] }
  ];

  // 获取路由，因为组件嵌套在 App下，导致 props.match.path 一直都是 '/'，
  // 所以 matchSidebar 使用匹配的方式对比，而不是直接判断路由是否相同。。。
  const routePath = useMemo(() => {
    return props.location.pathname;
  }, [props.location.pathname]);

  // 路由匹配侧边栏
  const matchSidebar = (item: SidebarItem) => {
    const matchSubLink = item.subLink.find((subitem: string) => routePath.includes(subitem));
    return (routePath === item.link || matchSubLink);
  }

  return (
    <section className={styles.sidebar}>
      {
        sideList.map((item, index)=> {
          return (
            <Link 
              key={index} 
              className={`
                ${styles['side-item']} 
                ${matchSidebar(item) ? styles['side-active'] : ''}
              `}
              to={item.link}
            >{ item.label }, { item.link }, { item.subLink }</Link>
          )
        })
      }
    </section>
  );
}

export default withRouter(Sidebar);

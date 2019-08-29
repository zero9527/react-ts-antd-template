import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './sidebar.scss';

const { useMemo, useReducer, useEffect } = React;

interface IProps extends RouteComponentProps {
  [prop: string]: any
}

interface ISidebarItem {
  label: string,
  link: string,
  subLink: string[],
  icon: any
}

function Sidebar(props: IProps) {
  const sideList1: ISidebarItem[] = [
    { label: '首页', link: '/', icon: faHome, subLink: ['/home'] },
    { label: '列表', link: '/list', icon: faList, subLink: ['/list/detail/'] },
    { label: '登录', link: '/login', icon: faUserCircle, subLink: [] }
  ];

  // const [sideList, setSideList] = useState([]);
  // useState 相当于 以下的useReducer 写法的封装
  const [sideList, setSideList] = useReducer((state, action) => {
    return [
      ...state,
      ...action
    ];
  }, []);

  useEffect(() => {
    setSideList(sideList1);
  }, []);

  // 获取路由，因为组件嵌套在 App下，导致 props.match.path 一直都是 '/'，
  // 所以 matchSidebar 使用匹配的方式对比，而不是直接判断路由是否相同。。。
  const routePath = useMemo(() => {
    return props.location.pathname;
  }, [props.location.pathname]);

  // 路由匹配侧边栏
  const matchSidebar = (item: ISidebarItem) => {
    const matchSubLink = item.subLink.find((subitem: string) => routePath.includes(subitem));
    return (routePath === item.link || matchSubLink);
  }

  return (
    <section className={styles.sidebar}>
      {
        sideList.map((item: ISidebarItem, index: number)=> {
          return (
            <Link 
              key={index} 
              className={
                `${styles['side-item']} ${matchSidebar(item) ? styles['side-active'] : ''}`
              }
              to={item.link}
            >
              <FontAwesomeIcon icon={item.icon} /> 
              <span className={styles['sideitem-label']}>{ item.label }</span>
            </Link>
          )
        })
      }
    </section>
  );
}

export default withRouter(Sidebar);

import * as React from 'react';
import withAppContext from '@/components/withAppContext';
import { withRouter, RouteComponentProps } from 'react-router';
import styles from './header.scss';

const { useEffect } = React;

interface IProps {
  text: string,
  [prop: string]: any
}
// withRouter不会传递除 history/location/match 之外的 props，
// 所以这里与组件本身的 props 类型分开
type IPropsWithRoute = IProps & RouteComponentProps;

function Header(props: IPropsWithRoute) {
  useEffect(() => {
    // console.log(props);
  }, []);
  
  return (
    <section className={styles.header}>
      <div className="center-content">
        <div>LOGO</div>
        <div>HEADER, { props.appname }, {props.text}</div>
      </div>
    </section>
  );
}

// withRouter不会传递除 history/location/match 之外的 props，
// 所以这里使用组件本身的 props：即 IProps
export default withAppContext<IProps>(withRouter(Header));

import * as React from 'react';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';
import styles from './App.scss';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {
  [prop: string]: any
}
export interface IState {
  timer?: any
}
export type State = Readonly<IState>;

export interface IAppContext {
  appname: string
}
const defaultContext: IAppContext = { appname: 'react-antd-ts' };
export const AppContext = React.createContext(defaultContext);

class App extends React.Component<Props, State> {
  public readonly state: State = {};
  
  constructor(props: Props) {
    super(props);
  }

  // public async componentDidMount() {
  //   const { default: _ } = await import(/* webpackPreload */'lodash');
  //   _.map([
  //     { num: 1 },
  //     { num: 2 },
  //     { num: 3 },
  //     { num: 4 },
  //   ], (item) => item.num * 10);
  // }

  public render() {
    // console.log(this.props);
    return (
      <div className={styles.app}>
        <AppContext.Provider value={defaultContext}>
          <Header text="tteexxtt" ddsssddd="dasad" />
          <Sidebar />
          { this.props.children }
          <Footer />
        </AppContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);

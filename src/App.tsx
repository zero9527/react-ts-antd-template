import * as React from 'react';
import Header from '@/components/header';
import style from './App.scss';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {
  [prop: string]: any
}

export interface IState {
  timer?: any
}

export type State = Readonly<IState>;

class App extends React.Component<Props, State> {
  public readonly state: State = {};
  
  constructor(props: Props) {
    super(props);
  }

  // public componentDidMount() {
  //   setInterval(() => console.log('app'), 1000);
  // }

  // public componentWillUnmount() {
  //   console.log('app unmount');
  // }
  
  public render() {
    const { children } = this.props;
    
    return (
      <div className={style.app}>
        <Header />
        { children }
      </div>
    );
  }
}

export default withRouter(App);

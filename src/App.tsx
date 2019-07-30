import * as React from 'react';
import Home from '@/views/home/index';
import './App.css';
// import logo from './logo.svg';

interface Props {
  [prop: string]: any
}

class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    // const { history, location } = this.props;
    return (
      <Home />
    );
  }
}

export default App;

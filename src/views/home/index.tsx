import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { homeStoreType } from '@/store/home';
import { Button } from 'antd';
import styles from './home.scss';

interface IProps {
  homeStore: homeStoreType,
  [prop: string]: any
}

@inject('homeStore')
@observer
class Home extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { count, setCount, setCountAsync } = this.props.homeStore;

    return (
      <div className={styles.home}>
        <div className={styles.content}>
          <p>react-ts-antd-template</p>
          <p className={styles.count}>
            count: { count }
          </p>
          <Button onClick={() => setCount(count + 1)}>count++</Button>
          <br />
          <Button onClick={() => setCountAsync(count + 1)}>countAsync++</Button>
          <br />
          <Button onClick={() => setCount(0)}>reset</Button>
        </div>
      </div>
    )
  }
}

export default Home;

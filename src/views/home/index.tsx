import * as React from 'react';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from '@/store-rematch';
import { Button } from 'antd';
import styles from './home.scss';

interface IProps {
  [prop: string]: any
}

function Home(props: IProps) {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <p>react-ts-antd-template</p>
        <p className={styles.count}>
          count: { props.count } &emsp;
          <Button onClick={props.addCount}>count++</Button>
        </p>
        <p className={styles.count}>
          countAsync: { props.countAsync } &emsp;
          <Button onClick={props.setCountAsync}>countAsync</Button>
        </p>
      </div>
    </div>
  )
}

const mapState = (state: iRootState) => {
  return {
    count: state.common.count,
    countAsync: state.common.countAsync
  }
}
const mapDispatch = (dispatch: Dispatch) => {
  return {
    addCount: () => dispatch({ type: 'common/addCount' }),
    setCountAsync: () => dispatch({ type: 'common/setCountAsync', payload: new Date().getSeconds() }),
  }
}

export default connect(mapState, mapDispatch)(Home);

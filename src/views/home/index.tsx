import * as React from 'react';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from '@/store-rematch';
import { Button } from 'antd';
import styles from './home.scss';

interface Props {
  [prop: string]: any
}

function Home(props: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
          react-ts-antd-template
          <div className={styles.count}>count: { props.count }</div>
          <Button onClick={props.addCount}>count++</Button>
      </div>
    </div>
  )
}

const mapState = (state: iRootState) => {
  return {
    count: state.common.count
  }
}
const mapDispatch = (dispatch: Dispatch) => {
  return {
    addCount: () => dispatch({ type: 'common/addCount' })
  }
}

export default connect(mapState, mapDispatch)(Home);

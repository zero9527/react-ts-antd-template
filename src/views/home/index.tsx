import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iRootState, Dispatch } from '@/store-rematch';
import { Button } from 'antd';
import styles from './home.scss';

interface IProps {
  [prop: string]: any
}

function Home(props: IProps) {
  const dispatch: Dispatch = useDispatch();
  const { count, countAsync } = useSelector((state: iRootState) => state.common);
  
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <p>react-ts-antd-template</p>
        <p className={styles.count}>
          count: { count } &emsp;
          <Button onClick={() => dispatch({ type: 'common/addCount' })}>count++</Button>
        </p>
        <p className={styles.count}>
          countAsync: { countAsync } &emsp;
          <Button 
            onClick={() => dispatch({ type: 'common/setCountAsync', payload: new Date().getSeconds() })}
          >countAsync</Button>
        </p>
      </div>
    </div>
  )
}

export default Home;

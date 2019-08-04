import * as React from 'react';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from '@/store-rematch';
import { Button } from 'antd';
import style from './home.scss';

interface Props {
  [prop: string]: any
}

function Home(props: Props) {
  return (
    <div className={style.home}>
      <div className={style.content}>
          欢迎使用 react-ts-antd-template
          <div>count: { props.count }</div>
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

import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import styles from './list.scss';

const { useState, useEffect } = React;

interface IProps extends RouteComponentProps {
  [prop: string]: any
}
export interface IListItem {
  id: number,
  text: string
}

const arr: IListItem[] = [
  { id: 1, text: 'item' },
  { id: 2, text: 'item' },
  { id: 3, text: 'item' },
  { id: 4, text: 'item' },
  { id: 5, text: 'item' },
  { id: 6, text: 'item' },
  { id: 7, text: 'item' },
  { id: 8, text: 'item' }
];

let scrollTop: number = 0;

// list
function List(props: IProps) {
  const [list, setList] = useState([{ id: 1, text: '' }]);

  useEffect(() => {
    setList(arr);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  // 监听列表与详情的切换
  useEffect(() => {
    if (props.location.pathname.includes("/list/detail/") ) {
      // console.log('scrollTop -- detail: ', scrollTop);
      document.documentElement.scrollTop = 0;

    } else {
      window.addEventListener('scroll', onScroll);
      setTimeout(() => {
        // console.log('scrollTop -- list: ', scrollTop);
        document.documentElement.scrollTop = scrollTop;
      }, 0);
    }
  }, [props.location.pathname]);

  // 监听滚动
  function onScroll() {
    // location.pathname 因为是同一组件，所以有问题，所以用原生js的
    if (location.hash.includes("/list/detail/") ) {
      window.removeEventListener('scroll', onScroll);
      
    } else {
      scrollTop = document.documentElement.scrollTop;
    }
  }

  function toDetail(id: number) {
    props.history.push(`/list/detail/${id}`);
  }

  return (
    <div className={styles.list}>
      <section 
        className="list-content" 
        style={{ 
          display: props.location.pathname.includes("/list/detail/") 
          ? 'none' 
          : 'block' 
        }}
      >
        {
          list.map((item, index) => {
            return (
              <div 
                key={index} 
                className={styles['list-item']}
                onClick={() => toDetail(item.id)}
              >
                list-{ index+1 }
              </div>
            )
          })
        }
      </section>
      {/* detial */}
      { props.children }
    </div>
  )
}

export default withRouter(List);

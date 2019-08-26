import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import styles from './list.scss';

const { useState, useEffect } = React;

interface Props extends RouteComponentProps {
  [prop: string]: any
}
export interface ListItem {
  id: number,
  text: string
}

const arr: ListItem[] = [
  { id: 1, text: 'list1skdjfnsdnfsdnfsdf' },
  { id: 2, text: 'list2jilkfsjjfnsdnfsdf' },
  { id: 3, text: 'list3sudfjnfnfnffffsdf' },
  { id: 4, text: 'list4kl.mlmjjjfsdnfsdf' },
  { id: 5, text: 'list5ldskfoiquqiquwwww' },
  { id: 6, text: 'list6skdjfnsdnfsdnfsdf' },
  { id: 7, text: 'list7jufhfbvbvvvvaaadf' },
  { id: 8, text: 'list8,lkoqpoqwkeqlwele' }
];

let scrollTop: number = 0;

// list
function List(props: Props) {
  const [list, setList] = useState([{ id: 1, text: '' }]);

  useEffect(() => {
    setList(arr);
    window.addEventListener('scroll', onScroll);

    return () => {
      // console.log('list unmount');
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  // 监听列表与详情的切换
  useEffect(() => {
    if (props.location.pathname.includes("/list/detail/") ) {
      console.log('scrollTop -- detail: ', scrollTop);
      document.documentElement.scrollTop = 0;

    } else {
      window.addEventListener('scroll', onScroll);
      setTimeout(() => {
        console.log('scrollTop -- list: ', scrollTop);
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
      // if (scrollTop > document.documentElement.scrollTop) return;
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
                { item.text }
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

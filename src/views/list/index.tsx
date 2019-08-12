import * as React from 'react';
import style from './list.scss';
import { withRouter, RouteComponentProps } from 'react-router';

const { useState, useEffect, useMemo } = React;

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
  { id: 8, text: 'list8,lkoqpoqwkeqlwele' },
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
  useMemo(() => {
    if (props.location.pathname === '/list') {
      window.addEventListener('scroll', onScroll);
      setTimeout(() => {
        document.documentElement.scrollTop = scrollTop;
      }, 0);

    } else {
      document.documentElement.scrollTop = 0;
    }
  }, [props.location.pathname]);

  // 监听滚动
  function onScroll() {
    // location.pathname 因为是同一组件，所以有问题，所以用原生js的
    if (location.hash === '#/list') {
      if (scrollTop > document.documentElement.scrollTop) return;
      scrollTop = document.documentElement.scrollTop;
      
    } else {
      window.removeEventListener('scroll', onScroll);
    }
  }

  function toDetail(id: number) {
    props.history.push(`/list/detail/${id}`);
  }

  return (
    <div className={style.list}>
      <section 
        className="list-content" 
        style={{ display: props.location.pathname === '/list' ? 'block' : 'none' }}
      >
        {
          list.map((item, index) => {
            return (
              <div 
                key={index} 
                className={style['list-item']}
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

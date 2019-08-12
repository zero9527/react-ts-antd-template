import * as React from 'react';
import style from './list-detail.scss';

const { useEffect }  = React;

interface Props {
  [prop: string]: any
}

function ListDetail(props: Props) {
  useEffect(() => {
    console.log('detail');
  }, []);

  return (
    <div className={style['list-detail']}>
      <div className="xy-center">
        list-detail
        <p>
          id: { props.match.params.id }
        </p>
      </div>
      <div className={style.line}>sdsdsd -- 1</div>
      <div className={style.line}>sdsdsd -- 2</div>
      <div className={style.line}>sdsdsd -- 3</div>
      <div className={style.line}>sdsdsd -- 4</div>
    </div>
  )
}

export default ListDetail;

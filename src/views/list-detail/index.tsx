import * as React from 'react';
import styles from './list-detail.scss';

const { useEffect }  = React;

interface IProps {
  [prop: string]: any
}

function ListDetail(props: IProps) {
  useEffect(() => {
    console.log('detail');
  }, []);

  return (
    <div className={styles['list-detail']}>
      <div className="xy-center">
        list-detail
        <p>
          id: { props.match.params.id }
        </p>
      </div>
      <div className={styles.line}>sdsdsd -- 1</div>
      <div className={styles.line}>sdsdsd -- 2</div>
      <div className={styles.line}>sdsdsd -- 3</div>
      <div className={styles.line}>sdsdsd -- 4</div>
    </div>
  )
}

export default ListDetail;

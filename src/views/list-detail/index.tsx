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
      <div className={styles.line}>detail -- { props.match.params.id }</div>
      <div className={styles.line}>detail -- { props.match.params.id }</div>
      <div className={styles.line}>detail -- { props.match.params.id }</div>
      <div className={styles.line}>detail -- { props.match.params.id }</div>
    </div>
  )
}

export default ListDetail;

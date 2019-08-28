import * as React from 'react';
import styles from './loading.scss';

const { useState, useEffect } = React;

interface IProps {
  children?: any
}

/**
 * 路由跳转 Loading组件
 */
function Loading(props: IProps) {
  const [loadingDot, setLoadingDot] = useState('');

  useEffect(() => {
    let timer:any = setTimeout(() => {
      let temp: any = loadingDot.length >= 3 ? '' : (loadingDot + '.');
      setLoadingDot(temp);
    }, 600);

    return () => {
      clearTimeout(timer);
    }
  }, [loadingDot]);
  
  return (
    <div className={styles['loading-wrapper']}>
      <div className={styles['loading-content']}>
        {props.children ? (
          <div>{props.children}</div>
        ) : (
          <p>
            loading
            <span>{loadingDot}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Loading;

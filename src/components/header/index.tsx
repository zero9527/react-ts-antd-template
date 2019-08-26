import * as React from 'react';
import styles from './header.scss';

interface Props {
  [prop: string]: any
}

function Header(props: Props) {
  
  return (
    <section className={styles.header}>
      <div className="center-content">
        <div>LOGO</div>
        <div>HEADER</div>
      </div>
    </section>
  );
}

export default Header;

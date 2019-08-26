import * as React from 'react';
import styles from './footer.scss';

interface Props {
  [prop: string]: any
}

function Footer(props: Props) {
  
  return (
    <section className={styles.header}>
      <div className="center-content">
        <div>FOOTER</div>
      </div>
    </section>
  );
}

export default Footer;

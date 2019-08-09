import * as React from 'react';
import style from './header.scss';

interface Props {
  [prop: string]: any
}

// header
function Header(props: Props) {
  
  return (
    <section className={style.header}>
      <div className="center-content">
        <div>LOGO</div>
        <div>HEADER</div>
      </div>
    </section>
  );
}

export default Header;

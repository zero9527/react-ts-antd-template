import * as React from 'react';
import { withRouter } from 'react-router-dom';
import png404 from '@/assets/page-404.png';
import styles from './err-comp.scss';

interface IProps {
  [prop: string]: any
}

class ErrComp extends React.Component<IProps> {
  constructor(props: IProps)   {
    super(props);
  }

  public render() {
    return (
      <section className={styles.error}>
        <div className={styles.content}>
          <p>
            <img src={png404} alt=""/>
          </p>
          Error 404!
        </div>
      </section>
    )
  }
}

const ErrCompWithRouter = withRouter(ErrComp as any);

export default ErrCompWithRouter;

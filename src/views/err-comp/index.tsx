import * as React from 'react';
import { withRouter } from 'react-router-dom';
import style from './err-comp.scss';

interface Props {
  [prop: string]: any
}

class ErrComp extends React.Component<Props> {
  constructor(props: Props)   {
    super(props);
  }

  public render() {
    return (
      <section className={style.error}>
        <div className={style.content}>Error 404!</div>
      </section>
    )
  }
}

const ErrCompWithRouter = withRouter(ErrComp as any);

export default ErrCompWithRouter;

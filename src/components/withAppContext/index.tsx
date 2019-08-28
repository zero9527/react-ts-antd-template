import * as React from 'react';
import { AppContext, IAppContext } from '@/App';

// 高阶组件：AppContext Consumer包装
// 使用时包在最外层，如 withAppContext<IProps>(withRouter(Header));
function withAppContext<T>(Component: React.ElementType) {
  // T: 泛型，传递 Component 的 props 类型，被包装的组件在父组件使用时智能提示
  // 但是需要和 withRouter 的类型分开， 
  // 因为 withRouter 不会传递除 history/location/match 之外的 props
  return (props: T) => {
    return (
      <AppContext.Consumer>
        {
          (appcontext: IAppContext) =>  <Component {...props} {...appcontext} />
        }
      </AppContext.Consumer>
    );
  }
}

export default withAppContext;

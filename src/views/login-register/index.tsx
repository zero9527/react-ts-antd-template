import * as React from 'react';
import Login from './login';
import Register from './register';
import particlesJS from './particlesJS';
import style from './login-register.scss';

interface Props {
  [prop: string]: any
}
const initialState = {
  type: 'login'
}

export type State = Readonly<typeof initialState>;

class LoginRegister extends React.Component<Props, State> {
  public readonly state: State = initialState;

  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    particlesJS('particles-js');
  }

  // 注册成功
  public onRegisterDone = () => {
    this.setState({
      type: 'login'
    })
  }

  public render() {
    return (
      <section className={style.login}>
        <div className={style.logo}>
          logo
        </div>
        {/* canvas背景 */}
        <div id="particles-js" />
        <div className={style['login-register-wrapper']}>
          <div className={style.tabbar}>
            <span
              className={`${style['tab-item']} ${this.state.type === 'login' ? style['tabbar-active'] : ''}`}
              onClick={() => this.setState({ type: 'login' })}
            >登录</span>
            <span 
              className={`${style['tab-item']} ${this.state.type === 'register' ? style['tabbar-active'] : ''}`}
              onClick={() => this.setState({ type: 'register' })}
            >注册</span>
          </div>
          {
            this.state.type === 'login' && <Login />
          }
          {
            this.state.type === 'register' && <Register onRegisterDone={this.onRegisterDone} />
          }
        </div>
      </section>
    );
  }
}

export default LoginRegister;

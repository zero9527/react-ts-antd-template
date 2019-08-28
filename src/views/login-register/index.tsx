import * as React from 'react';
import Login from './login';
import Register from './register';
import ParticlesJS from '@/components/particlesJS';
import styles from './login-register.scss';

interface IProps {
  [prop: string]: any
}
const initialState = {
  type: 'login'
}

export type State = Readonly<typeof initialState>;

class LoginRegister extends React.Component<IProps, State> {
  public readonly state: State = initialState;

  public constructor(props: IProps) {
    super(props);
  }

  // 注册成功
  public onRegisterDone = () => {
    this.setState({
      type: 'login'
    })
  }

  public render() {
    return (
      <section className={styles.login}>
        <div className={styles.logo}>
          logo
        </div>
        {/* canvas背景 */}
        <ParticlesJS />
        <div className={styles['login-register-wrapper']}>
          <div className={styles.tabbar}>
            <span
              className={`${styles['tab-item']} ${this.state.type === 'login' ? styles['tabbar-active'] : ''}`}
              onClick={() => this.setState({ type: 'login' })}
            >登录</span>
            <span 
              className={`${styles['tab-item']} ${this.state.type === 'register' ? styles['tabbar-active'] : ''}`}
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

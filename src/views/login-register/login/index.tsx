import * as React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router';
import * as Cookies from 'js-cookie';
import Api from '@/api/login-register';
import styles from './login.scss';

interface IProps extends RouteComponentProps {
  form: any,
  [prop: string]: any
}

const initialState = {
  fromUrl: '', // 登录前的地址
};

export type State = Readonly<typeof initialState>;

class LoginForm extends React.Component<IProps, State> {
  public readonly state: State = initialState;

  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    const fromUrl = this.props.location.search.split('=')[1];
    this.setState({ fromUrl });
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const that = this;
    e.preventDefault();
    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        
        const { username: name, password} = values;
        const { error_code, data, message: msg }: any = await Api.login({ name, password });
        
        if (error_code === 1) {
          message.success('登录成功！');
          Cookies.set('auth', data.access_token);
          // localStorage.setItem('auth', data.access_token);

          // 加载登录前页面
          setTimeout(() => {
            this.props.history.push(that.state.fromUrl || '/home');
          }, 300);
          
        } else {
          // 登录失败或登录状态过期
          message.error(msg);
          Cookies.remove('auth');
          // localStorage.removeItem('auth');
        }
      }
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的账号！' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入您的账号！"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码！"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
          <Button type="primary" size="large" htmlType="submit" className={styles['login-form-button']}>
            登录
          </Button>
          <a className={`${styles.block} ${styles['text-right']}`} href="">忘记密码</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create<IProps>({ name: 'normal_login' })(LoginForm);

export default withRouter(WrappedLoginForm as any);

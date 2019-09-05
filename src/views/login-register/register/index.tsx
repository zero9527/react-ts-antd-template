import * as React from 'react';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  message
} from 'antd';
import Api from '@/api/login-register';
import { phoneRegx } from '@/utils';
import styles from './register.scss';

interface IProps {
  onRegisterDone: () => void,
  form: any,
}
const initialState = {
  confirmDirty: false
};

export type State = Readonly<typeof initialState>;

const { Option } = Select;

class Register extends React.Component<IProps, State> {
  public readonly state: State = initialState;

  public constructor(props: IProps) {
    super(props);
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const that = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);

        const { username: name, password} = values;
        const { error_code, msg }: any = await Api.register({ name, password, confirm_pwd: password });
        
        if (error_code === 1) {
          message.success('注册成功，请稍后登录！');
          that.props.onRegisterDone();
        } else {
          message.error(msg);
        }
      }
    });
  };

  public handleConfirmBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  public compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  };

  public validateToNextPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  public validatePhone = (rule: any, value: any, callback: any) => {
    if (value && !phoneRegx.test(value)) {
      callback('请输入正确的手机号！');
    } else {
      callback();
    }
  };

  public render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>,
    );

    return (
      <Form {...formItemLayout} className={styles['form-register']} onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                type: 'string',
                message: '请输入正确的用户名！',
              },
              {
                required: true,
                message: '请输入用户名！',
              },
            ],
          })(<Input placeholder="用户名" size="large" />)}
        </Form.Item>

        <Form.Item hasFeedback={true}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码！',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password placeholder="密码" size="large" />)}
        </Form.Item>
        
        <Form.Item hasFeedback={true}>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: '请再次输入密码！',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password placeholder="确认密码" size="large" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        
        <Form.Item label="">
          {getFieldDecorator('phone', {
            rules: [
              // { required: true, message: '请输入手机号！' },
              { required: false, message: '请输入手机号！' },
              {
                validator: this.validatePhone,
              },
            ],
          })(<Input placeholder="手机号" size="large" addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        
        <Form.Item label="" extra="">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                // rules: [{ required: true, message: '请输入验证码！' }
                rules: [{ required: false, message: '请输入验证码！' }
              ],
              })(<Input placeholder="验证码" size="large" />)}
            </Col>
            <Col span={12}>
              <Button size="large">获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" className={styles['register-btn']}>
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegister = Form.create<IProps>({ name: 'register' })(Register);
export default WrappedRegister;

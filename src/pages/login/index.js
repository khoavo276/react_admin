import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { signIn } from '@api/auth';
import { login } from '@store/user';
import { PATHS } from '@config/paths';
import './index.scss';

const LoginPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async values => {
    try {
      setSubmitting(true);
      const credentials = await signIn(values);
      dispatch(login(credentials));
      history.push(PATHS.dashboard);
    } catch (error) {
      //
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <Form
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={submitting}
            loading={submitting}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

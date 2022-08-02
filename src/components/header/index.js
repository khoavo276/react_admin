import React from 'react';
import { Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
// import { signOut } from '@api/auth';
import { useDispatch } from 'react-redux';
import { logout } from '@store/user';
import { PATHS } from '@config/paths';
import './index.scss';

const Header = () => {
  const dispatch = useDispatch();

  const logoutAction = async () => {
    try {
      // await signOut();
      dispatch(logout());
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <header className="header">
      <Row justify="center">
        <Col md={23}>
          <div className="header-option">
            <Row justify="space-between" align="center">
              <Col>
                <Link to={PATHS.dashboard} className="header-logo">
                  謎解き研修 適性診断システム管理画面
                </Link>
              </Col>
              <Col>
                <span className="header-btn" onClick={logoutAction}>
                  ログアウト
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;

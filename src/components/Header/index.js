import React, { useCallback } from 'react';
import { Header, Logo, Menu, MenuItem, MenuToggle } from './styles';
import { Link, Route } from 'react-router-dom';

import ServicePage from '../../pages/servicepage';

const CommonHeader = () => {
  const onClickSpreadMenu = useCallback(() => {}, []);
  return (
    <>
      <Header>
        <Logo />
        <Menu>
          <MenuItem>
            <Link to="/">서비스</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">로그인</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/sign-up">회원가입</Link>
          </MenuItem>
        </Menu>
        <MenuToggle onClick={onClickSpreadMenu} />
      </Header>
      <Route path="/" component={ServicePage} />
      <Route path="/login" component={ServicePage} />
      <Route path="/sign-up" component={ServicePage} />
    </>
  );
};

export default CommonHeader;

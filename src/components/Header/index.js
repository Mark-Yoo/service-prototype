import React, { useCallback } from 'react';
import { Header, Logo, Menu, MenuItem, MenuToggle } from './styles';
import { Link } from 'react-router-dom';

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
            <Link to="/login">로그인</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/sign-up">회원가입</Link>
          </MenuItem>
        </Menu>
        <MenuToggle onClick={onClickSpreadMenu} />
      </Header>
    </>
  );
};

export default CommonHeader;

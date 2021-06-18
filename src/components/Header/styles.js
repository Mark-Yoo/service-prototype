import styled from 'styled-components';
import menuimg from '../../assets/img/menu.svg';
export const Header = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: pink;
  margin: 0 auto;
`;

export const Logo = styled.div`
  background: gold;
  width: 100px;
  height: 50px;
`;

export const MenuToggle = styled.div`
  background: no-repeat url(${menuimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 45px;
  margin: 10px;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: green;
`;

export const MenuItem = styled.li`
  list-style: none;
  margin: 10px;
`;

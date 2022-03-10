import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  display:flex;
  justify-content:center;
`;
const List = styled.ul`
  display:flex;
`;
const MenuElement = styled.li`
  list-style-type:none;
  margin:0 10px;

`;
const MyLink = styled(Link)`
  text-decoration:none;
  color: #1f1f1f;
  background:#ccc;
  padding:5px;
  border-radius:2px;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.3);
  &:hover {
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
  }
`;

const Header = () => {
  return (
    <Container>
      <List>
        <MenuElement>
          <MyLink to="/">Home</MyLink>
        </MenuElement>
        <MenuElement>
          <MyLink to="/about">About</MyLink>
        </MenuElement>
        <MenuElement>
          <MyLink to="/users">Users</MyLink>
        </MenuElement>
      </List>
    </Container>
  );
};

export default Header;

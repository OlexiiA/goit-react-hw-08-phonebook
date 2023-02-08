import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { Nav, NavItem } from './Navigation.styled';
// import {selectUser} from '../../redux/auth/authSelector';
// import { Box, Nav, NavList, NavItem } from './Header.styled'


export const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
    <NavItem to="/">
      Home
    </NavItem>
    {isLoggedIn && (
      <NavItem to="/contacts">
        Contacts
      </NavItem>
    )}
  </Nav>
  );
};

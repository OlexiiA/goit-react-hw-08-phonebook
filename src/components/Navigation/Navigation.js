import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';

// import {selectUser} from '../../redux/auth/authSelector';
// import { Box, Nav, NavList, NavItem } from './Header.styled'


export const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
    <NavLink to="/">
      Home
    </NavLink>
    {isLoggedIn && (
      <NavLink to="/contacts">
        Contacts
      </NavLink>
    )}
  </nav>
  );
};

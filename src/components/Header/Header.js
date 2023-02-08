import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';
import { HeaderView } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderView>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderView>
  );
};

import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <hr />
    </>
  );
};

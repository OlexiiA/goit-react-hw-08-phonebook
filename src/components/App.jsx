import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense } from "react";
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register';
import { Home } from './Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/authSelector';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts />}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<Login />}/>} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<Register />}/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

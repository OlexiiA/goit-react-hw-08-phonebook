import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense } from "react";
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register';
import { Home } from './Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/authSelector';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
console.log(isRefreshing)
  useEffect(() => {
    dispatch(registerUser())
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

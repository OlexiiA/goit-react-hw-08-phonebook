// import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense } from "react";
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register';
import { Home } from './Home/Home';
// import { useDispatch } from 'react-redux';
// import { registerUser } from 'redux/auth/authOperation';

export function App() {
// const dispatch = useDispatch();

// useEffect(() => {
// dispatch(registerUser())
// }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

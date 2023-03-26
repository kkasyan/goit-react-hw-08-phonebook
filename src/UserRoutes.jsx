import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;

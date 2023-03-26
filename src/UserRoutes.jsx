import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
// import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<SharedLayout />}> */}
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default UserRoutes;

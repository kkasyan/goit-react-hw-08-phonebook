import css from './app.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserRoutes from 'UserRoutes';
import { getCurrent } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <UserRoutes />
    </div>
  );
};

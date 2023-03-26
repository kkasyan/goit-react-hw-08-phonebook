import css from './app.module.css';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <div className={css.wrap}>
      <UserRoutes />
    </div>
  );
};

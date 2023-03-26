import { NavLink } from 'react-router-dom';

const LoggedOutUser = () => {
  return (
    <div>
      LoggedOut
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default LoggedOutUser;

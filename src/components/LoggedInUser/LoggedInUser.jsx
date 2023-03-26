import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

const LoggedInUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <>
      <p>{name}</p>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </>
  );
};

export default LoggedInUser;

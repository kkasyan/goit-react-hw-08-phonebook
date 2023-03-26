import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'redux/auth/operations';
import { getAuthError } from 'redux/auth/selectors';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(signIn(data));
  };

  return (
    <div>
      <LoginForm onSubmit={onLogin} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default Login;

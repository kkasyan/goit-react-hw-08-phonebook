import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'redux/auth/operations';
import { getAuthError } from 'redux/auth/selectors';

import LoginForm from 'components/Forms/LoginForm/LoginForm';

import { Text } from '@chakra-ui/react';

const Login = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(signIn(data));
  };

  return (
    <>
      <LoginForm onSubmit={onLogin} />
      {status && <Text textAlign="center">For now you are {message}!</Text>}
    </>
  );
};

export default Login;

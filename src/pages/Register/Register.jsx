import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';

import { signUp } from 'redux/auth/operations';
import { getAuthError } from 'redux/auth/selectors';

import { useDispatch, useSelector } from 'react-redux';

import { Text } from '@chakra-ui/react';

const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signUp(data));
  };

  return (
    <>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <Text textAlign="center">Your problem is: you are {message}!</Text>
      )}
    </>
  );
};

export default Register;

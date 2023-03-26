import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signUp } from 'redux/auth/operations';
import { getAuthError } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signUp(data));
  };

  return (
    <div>
      Register
      <RegisterForm onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </div>
  );
};

export default Register;

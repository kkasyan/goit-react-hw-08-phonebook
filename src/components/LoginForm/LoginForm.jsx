import css from './loginForm.module.css';
import { useState } from 'react';
import { FormButton } from 'components/shared/FormButton/FormButton';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      Login Form
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="number">
          E-mail
          <input
            name="email"
            value={email}
            onChange={handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            value={password}
            onChange={handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <FormButton type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;

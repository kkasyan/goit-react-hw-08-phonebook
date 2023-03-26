import css from './registerForm.module.css';
import { useState } from 'react';
import { FormButton } from 'components/shared/FormButton/FormButton';

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = state;

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
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      Register Form
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name">
          Name
          <input
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
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
        <FormButton type="submit" text="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton } from 'components/shared/FormButton/FormButton';

import {
  Image,
  Heading,
  Input,
  Box,
  Center,
  Text,
  InputGroup,
} from '@chakra-ui/react';

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
    <Center flexDirection="column">
      <Heading m="5px">Register</Heading>
      <Box display="flex">
        <Image
          src="https://i.pinimg.com/564x/dd/ae/1f/ddae1fd6e36e1b939b028a2d88b0378b.jpg"
          alt="Notebook"
          p="10px"
          borderRadius="10"
          h="500px"
        />
        <form onSubmit={handleSubmit}>
          <InputGroup flexDirection="column" pt="10px" pb="10px">
            <Text>Name</Text>
            <Input
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
          <InputGroup flexDirection="column" pb="10px">
            <Text>E-mail</Text>
            <Input
              name="email"
              value={email}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </InputGroup>
          <InputGroup flexDirection="column" mb="10px">
            <Text>Password</Text>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              pattern=".{7,}"
              title="Seven or more characters"
              required
            />
          </InputGroup>
          <FormButton type="submit" text="Register" />
          <Text mt="5px">Already have an account?</Text>
          <NavLink to="/login">
            <Text> Let's login! 👉🏼</Text>
          </NavLink>
        </form>
      </Box>
    </Center>
  );
};

export default RegisterForm;

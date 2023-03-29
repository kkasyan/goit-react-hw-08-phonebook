import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton } from 'components/shared/FormButton/FormButton';
import {
  Input,
  Box,
  Center,
  Text,
  InputGroup,
  Image,
  Heading,
} from '@chakra-ui/react';

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
    <Center flexDirection="column">
      <Heading m="5px">Login</Heading>
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
            <Text>E-mail</Text>
            <Input
              name="email"
              value={email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              focusBorderColor="pink.400"
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
              required
              autoComplete="true"
              focusBorderColor="pink.400"
            />
          </InputGroup>
          <FormButton type="submit" text="Login" />
          <Text mt="5px">Still don't have an account?</Text>
          <NavLink to="/register">
            <Text> Let's register! 👉🏼</Text>
          </NavLink>
        </form>
      </Box>
    </Center>
  );
};

export default LoginForm;

import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const LoggedOutUser = () => {
  return (
    <Box display="flex">
      <NavLink to="/register">
        <Text fontSize="lg">Register |</Text>
      </NavLink>
      <NavLink to="/login">
        <Text fontSize="lg" ml="5px">
          Login
        </Text>
      </NavLink>
    </Box>
  );
};

export default LoggedOutUser;

import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

import { Text, Box, Button } from '@chakra-ui/react';

const LoggedInUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <Box display="flex" alignItems="center">
      <Text fontSize="lg" mr="5px">
        {name} |
      </Text>
      <Button type="button" onClick={onLogOut}>
        <Text fontSize="lg">Logout</Text>
      </Button>
    </Box>
  );
};

export default LoggedInUser;

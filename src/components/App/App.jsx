import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserRoutes from 'UserRoutes';

import { getCurrent } from 'redux/auth/operations';

import { Box } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <Box bg="#fdf5f9" p="5px" h="100vh">
      <UserRoutes />
    </Box>
  );
};

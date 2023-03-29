import { Link } from 'react-router-dom';

import LoggedInUser from 'components/Menus/LoggedInUser/LoggedInUser';
import LoggedOutUser from 'components/Menus/LoggedOutUser/LoggedOutUser';
import ContactMenu from 'components/Menus/ContactMenu/ContactMenu';
import useAuth from 'hooks/useAuth';

import { Box, Heading, Flex } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import Sparkles from 'react-sparkle';

const Navigation = () => {
  const isLogin = useAuth();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="#f8d9e7"
      w="100%"
      p={4}
      color="white"
    >
      <Link to="/contacts">
        <Flex align="center">
          <PhoneIcon w={8} h={8} />
          <Heading p="7px" bg="#eb8db8" ml="8px" borderRadius="4px">
            My Cutie Pie Phonebook
          </Heading>
          <Sparkles color="yellow" overflowPx={5} />
        </Flex>
      </Link>
      {isLogin && <ContactMenu />}
      {isLogin ? <LoggedInUser /> : <LoggedOutUser />}
    </Box>
  );
};

export default Navigation;

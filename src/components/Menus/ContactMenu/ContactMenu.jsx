import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

const ContactMenu = () => {
  return (
    <NavLink to="/contacts">
      <Text fontSize="lg">Contacts</Text>
    </NavLink>
  );
};

export default ContactMenu;

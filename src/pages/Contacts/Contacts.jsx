import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/Forms/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

import { Text, Heading, Box, Center, Divider } from '@chakra-ui/react';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="column">
      <Center p="5px" display="flex" flexDirection="column">
        <Heading p="5px" as="h1" fontSize="40px">
          My Phonebook
        </Heading>
        <ContactForm />
      </Center>
      <Divider />
      <Box mt="15px" bg="#e56ba2" p="7px" borderRadius="5px">
        <Heading as="h2">Contacts</Heading>
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Text pt="10px">
            Huh... Nothing to show! It's time to make friends!💫
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Contacts;

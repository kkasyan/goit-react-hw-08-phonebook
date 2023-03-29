import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filter/slice';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/filter/selectors';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/operations';

import ContactForm from '../../components/Forms/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

import { Text, Heading, Box, Center, Divider } from '@chakra-ui/react';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="column">
      <Center p="5px" display="flex" flexDirection="column">
        <Heading p="5px" as="h1" fontSize="40px">
          My Phonebook
        </Heading>
        <ContactForm onSubmit={onAddContact} />
      </Center>
      <Divider />
      <Box mt="15px" bg="#e56ba2" p="7px" borderRadius="5px">
        <Heading as="h2">Contacts</Heading>
        <Filter onChange={onSetFilter} value={filter} />
        {contacts.length > 0 ? (
          <ContactList items={contacts} removeContact={onRemoveContact} />
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

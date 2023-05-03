import PropTypes from 'prop-types';
import Item from './Item/Item';
import { UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = ({ items }) => {
  const contacts = useSelector(getFilteredContacts);

  const elements = contacts.map(item => <Item key={item.id} contact={item} />);
  return (
    <>
      <UnorderedList maxWidth="400px" p="15px">
        {elements}
      </UnorderedList>
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

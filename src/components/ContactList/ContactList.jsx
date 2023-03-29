import PropTypes from 'prop-types';
import Item from './Item/Item';
import { UnorderedList } from '@chakra-ui/react';

export const ContactList = ({ items, removeContact }) => {
  const elements = items.map(item => (
    <Item key={item.id} removeContact={removeContact} contact={item} />
  ));
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

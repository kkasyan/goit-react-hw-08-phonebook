import PropTypes from 'prop-types';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';

import { FormButton } from 'components/shared/FormButton/FormButton';

import { Text, ListItem, Box } from '@chakra-ui/react';

const Item = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ListItem
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="2px"
    >
      <Box display="flex">
        <Text mr="7px" color="white">
          {name}
        </Text>
        <Text mr="10px" color="white">
          {number}
        </Text>
      </Box>
      <FormButton onRemove={() => onRemoveContact(id)} text="Delete" />
    </ListItem>
  );
};

Item.propTypes = {
  removeContact: PropTypes.func,
};

export default memo(Item);

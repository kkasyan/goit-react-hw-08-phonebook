import PropTypes from 'prop-types';
import { memo } from 'react';

import { FormButton } from 'components/shared/FormButton/FormButton';

import { Text, ListItem, Box } from '@chakra-ui/react';

const Item = ({ contact: { name, number, id }, removeContact }) => {
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
      <FormButton onRemove={() => removeContact(id)} text="Delete" />
    </ListItem>
  );
};

Item.propTypes = {
  removeContact: PropTypes.func,
};

export default memo(Item);

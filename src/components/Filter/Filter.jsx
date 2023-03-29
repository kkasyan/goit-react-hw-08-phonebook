import PropTypes from 'prop-types';

import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { BsSearchHeart } from 'react-icons/bs';

export const Filter = ({ value, onChange }) => {
  return (
    <InputGroup size="lg">
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={BsSearchHeart} w={7} h={7} color="gray.300" />}
      />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find contacts by name"
        focusBorderColor="pink.400"
        bg="white"
      />
    </InputGroup>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

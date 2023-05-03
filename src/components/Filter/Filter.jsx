import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { getFilter } from 'redux/filter/selectors';

import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { BsSearchHeart } from 'react-icons/bs';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <InputGroup size="lg">
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={BsSearchHeart} w={7} h={7} color="gray.300" />}
      />
      <Input
        type="text"
        value={filter}
        onChange={onSetFilter}
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

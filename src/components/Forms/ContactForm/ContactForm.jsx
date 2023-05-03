import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { FormButton } from 'components/shared/FormButton/FormButton';

import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from '@chakra-ui/react';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';

const ContactForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const dispatch = useDispatch();

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ ...state });
    reset();
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  return (
    <Box m="10px" boxShadow="base" p="6" rounded="md">
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg" mb="10px">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={BsFillPersonFill} w={7} h={7} color="gray.300" />
            }
          />
          <Input
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_.\-]+[\\\|\s]?[a-zA-Z0-9_.\-]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            variant="flushed"
            focusBorderColor="pink.400"
            required
          />
        </InputGroup>
        <InputGroup size="lg" mb="20px">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={BsTelephoneFill} w={7} h={7} color="gray.300" />
            }
          />
          <Input
            name="number"
            value={number}
            onChange={handleChange}
            pattern="[0-9.\-]*"
            title="Phone number must be digits and can contain dashes, parentheses"
            variant="flushed"
            focusBorderColor="pink.400"
            required
          />
        </InputGroup>
        <FormButton type="submit" text="Add contact" />
      </form>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default memo(ContactForm);

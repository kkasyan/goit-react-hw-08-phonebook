import { useState, memo } from 'react';
import PropTypes from 'prop-types';

import { FormButton } from 'components/shared/FormButton/FormButton';

import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from '@chakra-ui/react';
import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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

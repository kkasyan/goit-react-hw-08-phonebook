import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <Button p="30px" m="10px">
      <Link to="/contacts">Back to the contacts</Link>
    </Button>
  );
};

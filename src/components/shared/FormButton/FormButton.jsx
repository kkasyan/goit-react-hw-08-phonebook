import { Button } from '@chakra-ui/react';

export const FormButton = ({ text, type, onRemove }) => {
  return (
    <Button onClick={onRemove} type={type}>
      {text}
    </Button>
  );
};

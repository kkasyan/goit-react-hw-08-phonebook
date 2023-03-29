import { Spinner, Center } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Center pt="15">
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.500"
      />
    </Center>
  );
};

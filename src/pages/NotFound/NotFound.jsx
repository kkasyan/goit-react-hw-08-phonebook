import { Center, Text, Image } from '@chakra-ui/react';
import { BackButton } from 'components/shared/BackButton/BackButton';

const NotFound = () => {
  return (
    <Center p="15px" flexDirection="column">
      <Text p="5px">The page you are looking for is not found...</Text>
      <BackButton />
      <Image
        src="https://i.pinimg.com/564x/03/61/dd/0361dd6bd4a279f4adee51f982bba2e0.jpg"
        alt="Not Found"
      />
    </Center>
  );
};

export default NotFound;

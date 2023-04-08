import { useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';

import routes from 'router/routes';
import HorizontalLine from 'components/HorizontalLine';

export default function ErrorResponse() {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex mb="15px" alignItems="center" justifyContent="center">
        <Heading as="h2" size="lg" mr="30px" color="red.400" textAlign="center">
          An error has occurred
        </Heading>
      </Flex>

      <HorizontalLine my="30px" />

      <Box>
        <Text fontSize="lg" fontStyle="italic" textAlign="center">
          An error has occurred while processing request. Please try again later!
        </Text>
      </Box>

      <HorizontalLine my="30px" />
      <ButtonGroup w="100%" justifyContent="center">
        <Button
          type="submit"
          w={['100%', '75%', '50%']}
          colorScheme="blue"
          onClick={() => navigate(routes.root.path)}
        >
          Back to survey
        </Button>
      </ButtonGroup>
    </Box>
  );
}

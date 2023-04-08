import { useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, Text, Icon, ButtonGroup, Button, VStack } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

import routes from 'router/routes';
import HorizontalLine from 'components/HorizontalLine';

interface ISucessResponseProps {
  response: {
    data: {
      id: string;
      attributes: {
        answers: {
          answer: string;
        }[];
      };
    };
  };
}

export default function SuccessResponse({ response }: ISucessResponseProps) {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex mb="15px" alignItems="center" justifyContent="center">
        <Heading as="h2" size="lg" mr="30px" color="green.400" textAlign="center">
          Survey successfully submitted
        </Heading>
      </Flex>

      <HorizontalLine my="30px" />

      <VStack alignItems="flex-start" spacing={3}>
        <Flex alignItems="center">
          <Text mr="5px">Id:</Text>
          <Text fontWeight="bold">{response.data.id}</Text>
        </Flex>

        <Flex alignItems="center">
          <Text mr="5px">Film:</Text>
          <Text fontWeight="bold">{response.data.attributes.answers[0].answer}</Text>
        </Flex>

        <Flex alignItems="center">
          <Text mr="5px">Rating:</Text>
          {Array.from({ length: parseInt(response.data.attributes.answers[1].answer) }).map(
            (_, index) => (
              <Icon boxSize={['30px']} as={AiFillStar} key={index} color="yellow.400" />
            )
          )}
        </Flex>
      </VStack>

      <Box my="30px">
        <Text fontSize="lg" fontStyle="italic" textAlign="center">
          Your feedback has been recorded. Thank you for your time!
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

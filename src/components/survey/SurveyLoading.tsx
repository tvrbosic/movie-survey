import { Center, Spinner, Text, VStack } from '@chakra-ui/react';

export default function SurveyLoading() {
  return (
    <Center minHeight={'50vh'}>
      <VStack>
        <Text fontSize="lg" fontStyle="italic" fontWeight="bold" color="gray.500" mb={'20px'}>
          Loading survey ...
        </Text>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.300" color="green.200" size="xl" />
      </VStack>
    </Center>
  );
}

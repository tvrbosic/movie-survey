import { Flex, Heading, Text } from '@chakra-ui/react';

interface IFormHeaderProps {
  title: string;
  description: string;
}

export default function FormHeader({ title, description }: IFormHeaderProps) {
  return (
    <Flex flexDir="column" alignItems="center" color="gray.600" mb="30px">
      <Heading as="h2" size="lg" mb="15px">
        {title}
      </Heading>
      <Text
        fontStyle="italic"
        textAlign="center"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Flex>
  );
}

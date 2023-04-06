import { Flex, Text } from '@chakra-ui/react';

interface IFooterProps {
  height: string[];
}

export default function Footer({ height }: IFooterProps) {
  return (
    <Flex
      height={height}
      bgGradient="linear(to-r, green.200, cyan.200)"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text>@2023 by LogoIpsum</Text>
    </Flex>
  );
}

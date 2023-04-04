import { Flex, Box, FlexProps } from '@chakra-ui/react';

import { IContainerPaddings } from 'ts/definitions';

interface ContainerProps extends FlexProps {
  children: React.ReactNode;
  paddings: IContainerPaddings;
}

function Container({ children, paddings, ...rest }: ContainerProps) {
  return (
    <Flex flexDirection="column" bg="gray.100" {...rest}>
      <Box
        width={['100%', '600px', '800px']}
        mx="auto"
        my={[0, '30px', '60px']}
        px={[paddings.x.sm, paddings.x.md, paddings.x.lg]}
        py={[paddings.y.sm, paddings.y.md, paddings.y.lg]}
        bg="white"
        borderRadius="6px"
      >
        {children}
      </Box>
    </Flex>
  );
}

export default Container;

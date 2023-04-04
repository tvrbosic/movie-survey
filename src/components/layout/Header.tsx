import { Flex, FlexProps, Image, Heading } from '@chakra-ui/react';

import { IContainerPaddings } from 'ts/definitions';
import LogoIpsum from 'assets/images/logo-ipsum.svg';

interface HeaderProps extends FlexProps {
  paddings: IContainerPaddings;
}

function Header({ paddings, ...rest }: HeaderProps) {
  return (
    <Flex flexDirection="column" bgGradient="linear(to-r, cyan.200, green.200)" {...rest}>
      <Flex
        position="relative"
        width={['100%', '600px', '800px']}
        h="100%"
        mx="auto"
        px="15px"
        alignItems="center"
        justifyContent={['center', 'flex-start']}
        flexDirection={['column', 'row']}
      >
        <Image
          height={['25%', '70%']}
          position={['relative', 'absolute']}
          src={LogoIpsum}
          objectFit="contain"
          alt="Grassroots Logo"
        />
        <Heading
          as="h1"
          w="100%"
          size={['xl', 'lg']}
          color="gray.700"
          textAlign="center"
          mt={['20px', 0]}
        >
          Survey
        </Heading>
      </Flex>
    </Flex>
  );
}

export default Header;

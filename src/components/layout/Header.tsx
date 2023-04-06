import { Flex, FlexProps, Image, Heading } from '@chakra-ui/react';

import { IContainerPaddings } from 'ts/definitions';
import LogoIpsum from 'assets/images/logo-ipsum.svg';

interface HeaderProps extends FlexProps {
  paddings: IContainerPaddings;
}

function Header({ paddings, ...rest }: HeaderProps) {
  return (
    <Flex flexDirection="column" bgGradient="linear(to-r, green.200, cyan.200)" {...rest}>
      <Flex
        width={['100%', '500px', '600px']}
        h="100%"
        mx="auto"
        px={[0, '20px', '40px']}
        alignItems="center"
        justifyContent={['center', 'space-between']}
        flexDirection={['column', 'row']}
      >
        <Image
          height={['30%', '40%', '50%']}
          src={LogoIpsum}
          objectFit="contain"
          alt="Logo ipsum"
        />
        <Heading as="h1" size={['md', 'sm']} color="gray.700" textAlign="center" mt={['20px', 0]}>
          Online Survey
        </Heading>
      </Flex>
    </Flex>
  );
}

export default Header;

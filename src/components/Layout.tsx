import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Flex flexDirection="column">
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default Layout;

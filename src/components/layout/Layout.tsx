import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Container from 'components/layout/Container';

const layoutSettings = {
  heights: {
    header: '10vh',
    container: '90vh',
  },
  paddings: {
    x: {
      sm: '20px',
      md: '60px',
      lg: '100px',
    },
    y: {
      sm: '15px',
      md: '30px',
      lg: '50px',
    },
  },
};

function Layout() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Container minH={layoutSettings.heights.container} paddings={layoutSettings.paddings}>
        <Outlet />
      </Container>
    </Flex>
  );
}

export default Layout;

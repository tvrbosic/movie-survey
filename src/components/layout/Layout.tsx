import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/layout/Header';
import Container from 'components/layout/Container';

export const layoutSettings = {
  heights: {
    header: ['20vh', '10vh'],
    container: ['80vh', '90vh'],
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
      <Header height={layoutSettings.heights.header} paddings={layoutSettings.paddings} />
      <Container minH={layoutSettings.heights.container} paddings={layoutSettings.paddings}>
        <Outlet />
      </Container>
    </Flex>
  );
}

export default Layout;

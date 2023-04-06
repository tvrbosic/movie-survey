import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from 'components/layout/Header';
import Container from 'components/layout/Container';
import Footer from 'components/layout/Footer';

export const layoutSettings = {
  heights: {
    header: ['20vh', '10vh'],
    container: ['68vh', '82vh'],
    footer: ['12vh', '8vh'],
  },
  paddings: {
    x: {
      sm: '40px',
      md: '60px',
      lg: '80px',
    },
    y: {
      sm: '80px',
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
      <Footer height={layoutSettings.heights.footer} />
    </Flex>
  );
}

export default Layout;
